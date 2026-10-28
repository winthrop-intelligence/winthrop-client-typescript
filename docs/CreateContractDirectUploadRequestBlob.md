
# CreateContractDirectUploadRequestBlob


## Properties

Name | Type
------------ | -------------
`filename` | string
`byteSize` | number
`checksum` | string
`contentType` | string

## Example

```typescript
import type { CreateContractDirectUploadRequestBlob } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "filename": null,
  "byteSize": null,
  "checksum": null,
  "contentType": null,
} satisfies CreateContractDirectUploadRequestBlob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateContractDirectUploadRequestBlob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


