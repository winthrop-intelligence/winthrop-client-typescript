
# MassCreatePositionsResponse


## Properties

Name | Type
------------ | -------------
`created` | [Array&lt;AdminPosition&gt;](AdminPosition.md)
`errors` | [Array&lt;MassCreatePositionError&gt;](MassCreatePositionError.md)

## Example

```typescript
import type { MassCreatePositionsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "created": null,
  "errors": null,
} satisfies MassCreatePositionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassCreatePositionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


