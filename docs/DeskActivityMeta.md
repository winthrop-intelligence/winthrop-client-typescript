
# DeskActivityMeta


## Properties

Name | Type
------------ | -------------
`kind` | string
`status` | string
`currentPage` | number
`perPage` | number
`totalPages` | number
`totalEntries` | number
`returnedEntries` | number
`nextPage` | number
`previousPage` | number
`displayTimezone` | string
`refreshedAt` | Date
`period` | [DeskActivityMetaPeriod](DeskActivityMetaPeriod.md)
`source` | [DeskActivityMetaSource](DeskActivityMetaSource.md)

## Example

```typescript
import type { DeskActivityMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "status": null,
  "currentPage": null,
  "perPage": null,
  "totalPages": null,
  "totalEntries": null,
  "returnedEntries": null,
  "nextPage": null,
  "previousPage": null,
  "displayTimezone": null,
  "refreshedAt": null,
  "period": null,
  "source": null,
} satisfies DeskActivityMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskActivityMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


