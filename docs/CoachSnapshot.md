
# CoachSnapshot

Compensation resolves for the selected assignment in the system\'s current season, carrying forward from the nearest earlier season with a usable record, however far back, while the job stayed the same without a break (WINAD-10482). History stays as reported. The snapshot is null without compensation access or a selected position. season_year_str, performance, income reports and current contract fields retain their assignment context; compensation_source_year identifies the salary\'s actual season. Hourly current records retain their stored values and type; no annualization occurs. 

## Properties

Name | Type
------------ | -------------
`seasonYearStr` | string
`baseCompCents` | number
`totalCompCents` | number
`compensationType` | string
`compensationSourceYear` | number
`compensationIsFallback` | boolean
`compensationSourceCompensationId` | number
`compensationSourceRawContractId` | number
`buyoutTerms` | string
`record` | string
`contractStart` | string
`contractEnd` | string
`contractAtWill` | boolean
`rawContractId` | number
`incomeReports` | [Array&lt;SnapshotIncomeReport&gt;](SnapshotIncomeReport.md)
`asstCoachPoolCents` | number

## Example

```typescript
import type { CoachSnapshot } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYearStr": null,
  "baseCompCents": null,
  "totalCompCents": null,
  "compensationType": null,
  "compensationSourceYear": null,
  "compensationIsFallback": null,
  "compensationSourceCompensationId": null,
  "compensationSourceRawContractId": null,
  "buyoutTerms": null,
  "record": null,
  "contractStart": null,
  "contractEnd": null,
  "contractAtWill": null,
  "rawContractId": null,
  "incomeReports": null,
  "asstCoachPoolCents": null,
} satisfies CoachSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


