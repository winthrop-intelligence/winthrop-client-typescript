
# AdminUploadsList


## Properties

Name | Type
------------ | -------------
`meta` | [Meta](Meta.md)
`accounts` | [Array&lt;AdminUploadAccountOption&gt;](AdminUploadAccountOption.md)
`data` | [Array&lt;AdminUpload&gt;](AdminUpload.md)

## Example

```typescript
import type { AdminUploadsList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "accounts": null,
  "data": null,
} satisfies AdminUploadsList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUploadsList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


