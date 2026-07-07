
# FoiaRequestFollowUpHistoryMeta


## Properties

Name | Type
------------ | -------------
`asOfDate` | Date
`generatedAt` | Date
`timezone` | string
`filtersApplied` | { [key: string]: any; }
`currentPage` | number
`perPage` | number
`maxPerPage` | number
`totalPages` | number
`totalEntries` | number
`nextPage` | number
`previousPage` | number

## Example

```typescript
import type { FoiaRequestFollowUpHistoryMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "asOfDate": null,
  "generatedAt": null,
  "timezone": null,
  "filtersApplied": null,
  "currentPage": null,
  "perPage": null,
  "maxPerPage": null,
  "totalPages": null,
  "totalEntries": null,
  "nextPage": null,
  "previousPage": null,
} satisfies FoiaRequestFollowUpHistoryMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestFollowUpHistoryMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


