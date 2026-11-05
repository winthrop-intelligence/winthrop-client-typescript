
# AdminSeasonStatsImportsListMeta


## Properties

Name | Type
------------ | -------------
`requiredHeaders` | Array&lt;string&gt;
`optionalHeaders` | Array&lt;string&gt;
`jobs` | [Array&lt;AdminSeasonStatsImportJob&gt;](AdminSeasonStatsImportJob.md)

## Example

```typescript
import type { AdminSeasonStatsImportsListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requiredHeaders": null,
  "optionalHeaders": null,
  "jobs": null,
} satisfies AdminSeasonStatsImportsListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSeasonStatsImportsListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


