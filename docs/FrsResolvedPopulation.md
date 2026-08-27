
# FrsResolvedPopulation


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;FrsResolvedSchool&gt;](FrsResolvedSchool.md)
`selectedCount` | number
`inFrsScopeCount` | number
`includedCount` | number
`privateCount` | number
`licenseExcludedCount` | number
`licenseExcludedNames` | Array&lt;string&gt;
`missingFilingCount` | number
`membershipBasis` | string
`dataRefreshedAt` | Date

## Example

```typescript
import type { FrsResolvedPopulation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "selectedCount": null,
  "inFrsScopeCount": null,
  "includedCount": null,
  "privateCount": null,
  "licenseExcludedCount": null,
  "licenseExcludedNames": null,
  "missingFilingCount": null,
  "membershipBasis": null,
  "dataRefreshedAt": null,
} satisfies FrsResolvedPopulation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrsResolvedPopulation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


