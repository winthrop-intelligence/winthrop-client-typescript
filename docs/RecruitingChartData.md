
# RecruitingChartData


## Properties

Name | Type
------------ | -------------
`years` | Array&lt;number&gt;
`recruitRankings` | Array&lt;number&gt;
`confRecruitRankings` | Array&lt;number&gt;
`recruitingBudgetsDollars` | Array&lt;number&gt;
`confRecruitingBudgetsDollars` | Array&lt;number&gt;
`sportBudgetsDollars` | Array&lt;number&gt;
`confSportBudgetsDollars` | Array&lt;number&gt;

## Example

```typescript
import type { RecruitingChartData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "years": null,
  "recruitRankings": null,
  "confRecruitRankings": null,
  "recruitingBudgetsDollars": null,
  "confRecruitingBudgetsDollars": null,
  "sportBudgetsDollars": null,
  "confSportBudgetsDollars": null,
} satisfies RecruitingChartData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecruitingChartData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


