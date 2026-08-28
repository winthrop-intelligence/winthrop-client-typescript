
# FinancialComparisonRankedRow


## Properties

Name | Type
------------ | -------------
`rank` | number
`schoolId` | number
`schoolName` | string
`source` | string
`year` | number
`fallbackReason` | string
`value` | any
`comparabilityState` | string

## Example

```typescript
import type { FinancialComparisonRankedRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "rank": null,
  "schoolId": null,
  "schoolName": null,
  "source": null,
  "year": null,
  "fallbackReason": null,
  "value": null,
  "comparabilityState": null,
} satisfies FinancialComparisonRankedRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialComparisonRankedRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


