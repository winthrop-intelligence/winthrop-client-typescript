
# FoiaRequestedItemStatusBreakdownResponse


## Properties

Name | Type
------------ | -------------
`meta` | [FoiaRequestedItemStatusBreakdownMeta](FoiaRequestedItemStatusBreakdownMeta.md)
`data` | [Array&lt;FoiaRequestedItemStatusBreakdownRow&gt;](FoiaRequestedItemStatusBreakdownRow.md)

## Example

```typescript
import type { FoiaRequestedItemStatusBreakdownResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies FoiaRequestedItemStatusBreakdownResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestedItemStatusBreakdownResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


