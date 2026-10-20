
# AdminSchoolRevenueList

A school\'s financial-uploads console state (admin namespace) — years on file, school picker, year-select options, and Sidekiq import job status

## Properties

Name | Type
------------ | -------------
`meta` | [AdminSchoolRevenueListMeta](AdminSchoolRevenueListMeta.md)
`data` | [Array&lt;AdminSchoolRevenueListDataInner&gt;](AdminSchoolRevenueListDataInner.md)

## Example

```typescript
import type { AdminSchoolRevenueList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminSchoolRevenueList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolRevenueList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


