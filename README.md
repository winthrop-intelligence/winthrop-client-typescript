# WinAD TypeScript Client

TypeScript client library for the WinAD API.

## Installation

This package is published to GitHub Packages. To install:

### 1. Configure npm to use GitHub Packages

Create or update `~/.npmrc` with:

```
@winthrop-intelligence:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 2. Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `read:packages` scope
3. Copy token and add to `~/.npmrc` as shown above

### 3. Install the package

```bash
npm install @winthrop-intelligence/winthrop-client-typescript
```

## Usage

### Basic Example

```typescript
import { WinADClient } from '@winthrop-intelligence/winthrop-client-typescript';

// Initialize client
const client = new WinADClient({
  BASE: 'https://your-api-url.com/api/v1',
  TOKEN: 'your-api-token',
});

// Use the client
const administrators = await client.default.getAdministrators();
console.log(administrators);
```

### Configuration

The client accepts an `OpenAPIConfig` object:

```typescript
const client = new WinADClient({
  BASE: 'https://api.example.com/api/v1',  // API base URL
  TOKEN: 'your-token',                      // Authentication token
  HEADERS: {                                 // Optional custom headers
    'X-Custom-Header': 'value',
  },
});
```

### Environment Variables

You can store configuration in environment variables:

```bash
# .env
WINAD_API_BASE_URL=https://api.example.com/api/v1
WINAD_API_TOKEN=your_api_token_here
```

```typescript
import { WinADClient } from '@winthrop-intelligence/winthrop-client-typescript';

const client = new WinADClient({
  BASE: process.env.WINAD_API_BASE_URL,
  TOKEN: process.env.WINAD_API_TOKEN,
});
```

### Available Services

The client provides typed access to all WinAD API endpoints through service classes:

```typescript
// Administrators
await client.default.getAdministrators();
await client.default.getAdministratorById({ id: 123 });

// Coaches
await client.default.getCoaches();
await client.default.getCoachById({ id: 456 });

// Contracts
await client.default.getContracts();

// ... and more
```

### Error Handling

```typescript
import { WinADClient, ApiError } from '@winthrop-intelligence/winthrop-client-typescript';

try {
  const data = await client.default.getAdministrators();
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.body);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Development

### Regenerate Client

To regenerate the client from the OpenAPI spec:

```bash
npm run generate
```

This will fetch the latest spec from the WinAD repository and regenerate all TypeScript code.

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

## Auto-Generated Code

This client is auto-generated from the WinAD OpenAPI specification using [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).

**Note:** Most files are auto-generated and will be overwritten when regenerating. Manual customizations should be made to files listed in `.openapi-generator-ignore`.

## License

UNLICENSED - Internal use only
