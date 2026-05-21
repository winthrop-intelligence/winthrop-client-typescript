
# BulkCreateGames422Response


## Properties

Name | Type
------------ | -------------
`index` | number
`errors` | [{ [key: string]: BulkCreateGames422ResponseErrorsValue; }](BulkCreateGames422ResponseErrorsValue.md)

## Example

```typescript
import type { BulkCreateGames422Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "errors": null,
} satisfies BulkCreateGames422Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateGames422Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


