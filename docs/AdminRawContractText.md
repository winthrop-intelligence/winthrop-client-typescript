
# AdminRawContractText


## Properties

Name | Type
------------ | -------------
`id` | number
`hasFile` | boolean
`ocrText` | string
`unstractPdfText` | string
`layoutPreservedPdfText` | string
`textUnstractState` | string
`textUnstractErrorMessage` | string
`layoutPreservedUnstractState` | string
`layoutPreservedUnstractErrorMessage` | string

## Example

```typescript
import type { AdminRawContractText } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "hasFile": null,
  "ocrText": null,
  "unstractPdfText": null,
  "layoutPreservedPdfText": null,
  "textUnstractState": null,
  "textUnstractErrorMessage": null,
  "layoutPreservedUnstractState": null,
  "layoutPreservedUnstractErrorMessage": null,
} satisfies AdminRawContractText

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRawContractText
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


