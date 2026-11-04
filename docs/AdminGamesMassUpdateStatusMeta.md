
# AdminGamesMassUpdateStatusMeta


## Properties

Name | Type
------------ | -------------
`jobs` | [Array&lt;AdminGamesImportJob&gt;](AdminGamesImportJob.md)
`requiredHeaders` | Array&lt;string&gt;
`optionalHeaders` | Array&lt;string&gt;

## Example

```typescript
import type { AdminGamesMassUpdateStatusMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobs": null,
  "requiredHeaders": null,
  "optionalHeaders": null,
} satisfies AdminGamesMassUpdateStatusMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGamesMassUpdateStatusMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


