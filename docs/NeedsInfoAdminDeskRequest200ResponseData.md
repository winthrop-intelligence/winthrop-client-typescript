
# NeedsInfoAdminDeskRequest200ResponseData


## Properties

Name | Type
------------ | -------------
`uuid` | string
`status` | string
`clientNote` | string
`clockPaused` | boolean
`sentTo` | Array&lt;string&gt;
`sentToCount` | number

## Example

```typescript
import type { NeedsInfoAdminDeskRequest200ResponseData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "status": null,
  "clientNote": null,
  "clockPaused": null,
  "sentTo": null,
  "sentToCount": null,
} satisfies NeedsInfoAdminDeskRequest200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NeedsInfoAdminDeskRequest200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


