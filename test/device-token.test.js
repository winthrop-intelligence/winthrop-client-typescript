const assert = require("node:assert/strict");
const {
  AuthenticationError,
  BaseAPI,
  Configuration,
  DeviceToken,
  WINTHROP_CLI_NOT_INSTALLED_MESSAGE,
} = require("../dist");

function resetDeviceToken() {
  DeviceToken.clearCache();
  DeviceToken.configure({
    executablePath: "winthrop",
    timeoutMs: 10000,
    executor: async () => ({ stdout: "token\n" }),
  });
}

async function assertRejectsWithMessage(fn, message) {
  await assert.rejects(fn, (error) => {
    assert.equal(error.name, "AuthenticationError");
    assert.match(error.message, message);
    return true;
  });
}

async function testSuccess() {
  resetDeviceToken();
  let calls = 0;
  DeviceToken.configure({
    executor: async (options) => {
      calls += 1;
      assert.equal(options.executablePath, "winthrop");
      assert.equal(options.timeoutMs, 10000);
      assert.deepEqual(options.scopes, ["read"]);
      return { stdout: "abc123\n" };
    },
  });

  assert.equal(await DeviceToken.accessToken(["read"]), "Bearer abc123");
  assert.equal(calls, 1);
}

async function testCacheReuse() {
  resetDeviceToken();
  let calls = 0;
  DeviceToken.configure({
    executor: async () => {
      calls += 1;
      return { stdout: `token-${calls}\n` };
    },
  });

  assert.equal(await DeviceToken.accessToken(), "Bearer token-1");
  assert.equal(await DeviceToken.accessToken(), "Bearer token-1");
  assert.equal(calls, 1);
}

async function testClearCache() {
  resetDeviceToken();
  let calls = 0;
  DeviceToken.configure({
    executor: async () => {
      calls += 1;
      return { stdout: `token-${calls}\n` };
    },
  });

  assert.equal(await DeviceToken.accessToken(), "Bearer token-1");
  DeviceToken.clearCache();
  assert.equal(await DeviceToken.accessToken(), "Bearer token-2");
  assert.equal(calls, 2);
}

async function testMissingExecutable() {
  resetDeviceToken();
  DeviceToken.configure({
    executor: async () => {
      const error = new Error("spawn winthrop ENOENT");
      error.code = "ENOENT";
      throw error;
    },
  });

  await assertRejectsWithMessage(
    () => DeviceToken.accessToken(),
    new RegExp(WINTHROP_CLI_NOT_INSTALLED_MESSAGE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
  );
}

async function testNonZeroExitSurfacesStderr() {
  resetDeviceToken();
  DeviceToken.configure({
    executor: async () => {
      const error = new Error("Command failed");
      error.stderr = "not logged in; run winthrop login\n";
      throw error;
    },
  });

  await assertRejectsWithMessage(() => DeviceToken.accessToken(), /not logged in; run winthrop login/);
}

async function testBlankStdout() {
  resetDeviceToken();
  DeviceToken.configure({
    executor: async () => ({ stdout: " \n\t" }),
  });

  await assertRejectsWithMessage(() => DeviceToken.accessToken(), /blank access token/);
}

async function testTimeout() {
  resetDeviceToken();
  DeviceToken.configure({
    executor: async () => {
      const error = new Error("Command timed out");
      error.killed = true;
      throw error;
    },
  });

  await assertRejectsWithMessage(() => DeviceToken.accessToken(), /timed out/);
}

class TestAPI extends BaseAPI {
  async call() {
    const headers = {};
    if (this.configuration && this.configuration.accessToken) {
      headers.Authorization = await this.configuration.accessToken("Oauth2", []);
    }

    return this.request({
      path: "/resource",
      method: "GET",
      headers,
    });
  }
}

async function testRetry401OnceWithDeviceToken() {
  resetDeviceToken();
  const seenAuthorizations = [];
  let tokenCalls = 0;
  DeviceToken.configure({
    executor: async () => {
      tokenCalls += 1;
      return { stdout: `token-${tokenCalls}\n` };
    },
  });

  const config = new Configuration({
    basePath: "https://example.test",
    accessToken: await DeviceToken.accessToken(),
    fetchApi: async (_url, init) => {
      seenAuthorizations.push(init.headers.Authorization);
      return new Response(null, { status: seenAuthorizations.length === 1 ? 401 : 204 });
    },
  });

  const response = await new TestAPI(config).call();
  assert.equal(response.status, 204);
  assert.deepEqual(seenAuthorizations, ["Bearer token-1", "Bearer token-2"]);
  assert.equal(tokenCalls, 2);
}

async function testRetryUpdatesStaticDeviceTokenConfiguration() {
  resetDeviceToken();
  const seenAuthorizations = [];
  let tokenCalls = 0;
  DeviceToken.configure({
    executor: async () => {
      tokenCalls += 1;
      return { stdout: `token-${tokenCalls}\n` };
    },
  });

  const config = new Configuration({
    basePath: "https://example.test",
    accessToken: await DeviceToken.accessToken(),
    fetchApi: async (_url, init) => {
      seenAuthorizations.push(init.headers.Authorization);
      return new Response(null, {
        status: seenAuthorizations.length === 1 ? 401 : 204,
      });
    },
  });

  const api = new TestAPI(config);
  assert.equal((await api.call()).status, 204);
  assert.equal((await api.call()).status, 204);
  assert.deepEqual(seenAuthorizations, ["Bearer token-1", "Bearer token-2", "Bearer token-2"]);
  assert.equal(tokenCalls, 2);
}

async function testRetry401DoesNotLoop() {
  resetDeviceToken();
  let tokenCalls = 0;
  DeviceToken.configure({
    executor: async () => {
      tokenCalls += 1;
      return { stdout: `token-${tokenCalls}\n` };
    },
  });

  const config = new Configuration({
    basePath: "https://example.test",
    accessToken: await DeviceToken.accessToken(),
    fetchApi: async () => new Response("", { status: 401 }),
  });

  await assertRejectsWithMessage(() => new TestAPI(config).call(), /rejected with 401/);
  assert.equal(tokenCalls, 2);
}

async function testPlainAccessTokenBehaviorIsPreserved() {
  resetDeviceToken();
  let fetchCalls = 0;
  const config = new Configuration({
    basePath: "https://example.test",
    accessToken: "Bearer plain-token",
    fetchApi: async () => {
      fetchCalls += 1;
      return new Response("", { status: 401 });
    },
  });

  await assert.rejects(() => new TestAPI(config).call(), (error) => {
    assert.equal(error.name, "ResponseError");
    return true;
  });
  assert.equal(fetchCalls, 1);
}

async function run() {
  const tests = [
    testSuccess,
    testCacheReuse,
    testClearCache,
    testMissingExecutable,
    testNonZeroExitSurfacesStderr,
    testBlankStdout,
    testTimeout,
    testRetry401OnceWithDeviceToken,
    testRetryUpdatesStaticDeviceTokenConfiguration,
    testRetry401DoesNotLoop,
    testPlainAccessTokenBehaviorIsPreserved,
  ];

  for (const test of tests) {
    await test();
    console.log(`ok ${test.name}`);
  }

  resetDeviceToken();
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
