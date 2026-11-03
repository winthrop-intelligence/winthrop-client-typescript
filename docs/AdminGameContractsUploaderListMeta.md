
# AdminGameContractsUploaderListMeta


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`sports` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`seasonYears` | [Array&lt;AdminGameContractsUploaderListMetaSeasonYearsInner&gt;](AdminGameContractsUploaderListMetaSeasonYearsInner.md)
`jobs` | [Array&lt;AdminGameContractUploaderJob&gt;](AdminGameContractUploaderJob.md)

## Example

```typescript
import type { AdminGameContractsUploaderListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "sports": null,
  "seasonYears": null,
  "jobs": null,
} satisfies AdminGameContractsUploaderListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGameContractsUploaderListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


