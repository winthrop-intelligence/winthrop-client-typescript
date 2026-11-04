
# AdminSeasonStatsEditorListMeta


## Properties

Name | Type
------------ | -------------
`currentPage` | number
`totalPages` | number
`totalEntries` | number
`nextPage` | number
`previousPage` | number
`school` | [IdName](IdName.md)
`year` | number
`schools` | [Array&lt;IdName&gt;](IdName.md)
`years` | Array&lt;number&gt;
`fields` | [Array&lt;AdminSeasonStatsEditorField&gt;](AdminSeasonStatsEditorField.md)

## Example

```typescript
import type { AdminSeasonStatsEditorListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "currentPage": 2,
  "totalPages": 7,
  "totalEntries": 654,
  "nextPage": 3,
  "previousPage": 1,
  "school": null,
  "year": null,
  "schools": null,
  "years": null,
  "fields": null,
} satisfies AdminSeasonStatsEditorListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSeasonStatsEditorListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


