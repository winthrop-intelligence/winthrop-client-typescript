
# JobPostSalarySummary


## Properties

Name | Type
------------ | -------------
`currency` | string
`basis` | string
`summaryBasis` | string
`min` | number
`p25` | number
`median` | number
`p75` | number
`max` | number
`averageMidpoint` | number

## Example

```typescript
import type { JobPostSalarySummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "currency": USD,
  "basis": posted_range,
  "summaryBasis": annualized_values,
  "min": 60000,
  "p25": 70500,
  "median": 71000,
  "p75": 71500,
  "max": 84000,
  "averageMidpoint": 71000,
} satisfies JobPostSalarySummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostSalarySummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


