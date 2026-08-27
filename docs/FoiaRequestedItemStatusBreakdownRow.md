
# FoiaRequestedItemStatusBreakdownRow


## Properties

Name | Type
------------ | -------------
`periodStart` | Date
`requestableType` | string
`requestableTypeDisplay` | string
`pendingCount` | number
`receivedCount` | number
`notAvailableCount` | number
`accountedForCount` | number
`totalCount` | number

## Example

```typescript
import type { FoiaRequestedItemStatusBreakdownRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "periodStart": null,
  "requestableType": null,
  "requestableTypeDisplay": null,
  "pendingCount": null,
  "receivedCount": null,
  "notAvailableCount": null,
  "accountedForCount": null,
  "totalCount": null,
} satisfies FoiaRequestedItemStatusBreakdownRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestedItemStatusBreakdownRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


