/* tslint:disable */
/* eslint-disable */

declare const require: any;

export const WINTHROP_CLI_NOT_INSTALLED_MESSAGE = "Winthrop CLI is not installed. Install it and run `winthrop login`.";

export class AuthenticationError extends Error {
    override name: "AuthenticationError" = "AuthenticationError";
}

export interface DeviceTokenExecutorResult {
    stdout: string;
    stderr?: string;
}

export interface DeviceTokenExecutorOptions {
    executablePath: string;
    timeoutMs: number;
    scopes: string[];
}

export type DeviceTokenExecutor = (options: DeviceTokenExecutorOptions) => Promise<DeviceTokenExecutorResult>;

export interface DeviceTokenConfiguration {
    executablePath?: string;
    timeoutMs?: number;
    executor?: DeviceTokenExecutor;
}

export class DeviceToken {
    private static executablePath = "winthrop";
    private static timeoutMs = 10000;
    private static executor: DeviceTokenExecutor = defaultExecutor;
    private static cachedAccessToken: string | undefined;

    static configure(configuration: DeviceTokenConfiguration = {}): void {
        if (configuration.executablePath !== undefined) {
            DeviceToken.executablePath = configuration.executablePath;
        }
        if (configuration.timeoutMs !== undefined) {
            DeviceToken.timeoutMs = configuration.timeoutMs;
        }
        if (configuration.executor !== undefined) {
            DeviceToken.executor = configuration.executor;
        }
    }

    static async accessToken(scopes: string[] = []): Promise<string> {
        if (DeviceToken.cachedAccessToken !== undefined) {
            return DeviceToken.cachedAccessToken;
        }

        return DeviceToken.refreshAccessToken(scopes);
    }

    static async refreshAccessToken(scopes: string[] = []): Promise<string> {
        const { stdout } = await DeviceToken.runCli(scopes);
        const token = stdout.trim();
        if (token.length === 0) {
            throw new AuthenticationError("Authentication error: Winthrop CLI returned a blank access token.");
        }

        DeviceToken.cachedAccessToken = `Bearer ${token}`;
        return DeviceToken.cachedAccessToken;
    }

    static clearCache(): void {
        DeviceToken.cachedAccessToken = undefined;
    }

    static isCachedAccessToken(accessToken: string | null | undefined): boolean {
        return accessToken !== undefined && accessToken !== null && accessToken === DeviceToken.cachedAccessToken;
    }

    private static async runCli(scopes: string[]): Promise<DeviceTokenExecutorResult> {
        try {
            return await DeviceToken.executor({
                executablePath: DeviceToken.executablePath,
                timeoutMs: DeviceToken.timeoutMs,
                scopes,
            });
        } catch (error) {
            throw normalizeCliError(error);
        }
    }
}

function defaultExecutor(options: DeviceTokenExecutorOptions): Promise<DeviceTokenExecutorResult> {
    return new Promise((resolve, reject) => {
        const childProcess = require("child_process");
        childProcess.execFile(
            options.executablePath,
            ["token"],
            { timeout: options.timeoutMs },
            (error: any, stdout: string, stderr: string) => {
                if (error) {
                    error.stderr = stderr;
                    reject(error);
                    return;
                }

                resolve({ stdout, stderr });
            },
        );
    });
}

function normalizeCliError(error: any): Error {
    if (error && error.code === "ENOENT") {
        return new AuthenticationError(WINTHROP_CLI_NOT_INSTALLED_MESSAGE);
    }

    if (error && (error.killed === true || error.signal === "SIGTERM")) {
        return new AuthenticationError("Authentication error: Winthrop CLI token command timed out.");
    }

    const stderr = typeof error?.stderr === "string" ? error.stderr.trim() : "";
    if (stderr.length > 0) {
        return new AuthenticationError(stderr);
    }

    return new AuthenticationError("Authentication error: Winthrop CLI token command failed.");
}
