
# FoiaStatusSummaryMeta


## Properties

Name | Type
------------ | -------------
`asOfDate` | Date
`generatedAt` | Date
`timezone` | string
`filtersApplied` | [FoiaStatusSummaryFilters](FoiaStatusSummaryFilters.md)
`currentPage` | number
`perPage` | number
`maxPerPage` | number
`totalPages` | number
`totalEntries` | number
`nextPage` | number
`previousPage` | number
`activeHoldNotePrefix` | string
`activeHoldReasons` | { [key: string]: string; }

## Example

```typescript
import type { FoiaStatusSummaryMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "asOfDate": Wed Oct 07 00:00:00 UTC 2026,
  "generatedAt": 2026-10-08T02:30Z,
  "timezone": America/New_York,
  "filtersApplied": null,
  "currentPage": null,
  "perPage": null,
  "maxPerPage": null,
  "totalPages": null,
  "totalEntries": null,
  "nextPage": null,
  "previousPage": null,
  "activeHoldNotePrefix": FOIA hold: ,
  "activeHoldReasons": {"legal review":"legal_review"},
} satisfies FoiaStatusSummaryMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


