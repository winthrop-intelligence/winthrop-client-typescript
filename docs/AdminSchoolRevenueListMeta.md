
# AdminSchoolRevenueListMeta


## Properties

Name | Type
------------ | -------------
`school` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`schools` | [Array&lt;IdName&gt;](IdName.md)
`yearOptions` | [Array&lt;AdminSchoolRevenueListMetaYearOptionsInner&gt;](AdminSchoolRevenueListMetaYearOptionsInner.md)
`jobs` | [AdminSchoolRevenueListMetaJobs](AdminSchoolRevenueListMetaJobs.md)

## Example

```typescript
import type { AdminSchoolRevenueListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "schools": null,
  "yearOptions": null,
  "jobs": null,
} satisfies AdminSchoolRevenueListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolRevenueListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


