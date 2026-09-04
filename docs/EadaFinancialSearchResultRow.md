
# EadaFinancialSearchResultRow


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`year` | number
`matchStatus` | string
`sportCode` | string
`sportName` | string
`mappingStatus` | string
`metrics` | [Array&lt;EadaNormalizedMetric&gt;](EadaNormalizedMetric.md)
`sourcePayload` | object

## Example

```typescript
import type { EadaFinancialSearchResultRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "year": null,
  "matchStatus": null,
  "sportCode": null,
  "sportName": null,
  "mappingStatus": null,
  "metrics": null,
  "sourcePayload": null,
} satisfies EadaFinancialSearchResultRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaFinancialSearchResultRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


