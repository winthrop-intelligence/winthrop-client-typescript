
# Logo


## Properties

Name | Type
------------ | -------------
`originalUrl` | string
`mediumUrl` | string
`smallUrl` | string

## Example

```typescript
import type { Logo } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "originalUrl": https://example.com/logos/original/logo.gif,
  "mediumUrl": https://example.com/logos/medium/logo.gif,
  "smallUrl": https://example.com/logos/small/logo.gif,
} satisfies Logo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Logo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


