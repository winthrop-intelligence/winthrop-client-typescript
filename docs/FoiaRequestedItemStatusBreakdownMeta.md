
# FoiaRequestedItemStatusBreakdownMeta


## Properties

Name | Type
------------ | -------------
`asOfDate` | Date
`generatedAt` | Date
`timezone` | string
`filtersApplied` | { [key: string]: any; }
`totalGroups` | number
`totalItems` | number

## Example

```typescript
import type { FoiaRequestedItemStatusBreakdownMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "asOfDate": null,
  "generatedAt": null,
  "timezone": null,
  "filtersApplied": null,
  "totalGroups": null,
  "totalItems": null,
} satisfies FoiaRequestedItemStatusBreakdownMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestedItemStatusBreakdownMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


