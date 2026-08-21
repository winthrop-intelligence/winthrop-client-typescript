
# DeskAdminQueueResponse


## Properties

Name | Type
------------ | -------------
`meta` | [DeskAdminQueueResponseMeta](DeskAdminQueueResponseMeta.md)
`data` | [Array&lt;DeskAdminQueueRow&gt;](DeskAdminQueueRow.md)

## Example

```typescript
import type { DeskAdminQueueResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies DeskAdminQueueResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminQueueResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


