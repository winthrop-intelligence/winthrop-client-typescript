
# CoachSnapshot

Target-assignment snapshot. Own pay and contract fields describe that assignment only. Separate latest_known_* fields provide authorized earlier pay with its original year, using the same consecutive-job rule as search. Older 990 base and total are display context; they do not replace current fields, record, income reports or assistant pool.

## Properties

Name | Type
------------ | -------------
`latestKnownFallback` | boolean
`latestKnownCompensationCents` | number
`latestKnownBaseSalaryCents` | number
`latestKnownCompensationType` | string
`latestKnownSourceYear` | number
`latestKnownSourceCompensationId` | number
`latestKnownSourceRawContractId` | number
`seasonYearStr` | string
`baseCompCents` | number
`totalCompCents` | number
`compensationType` | string
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
  "latestKnownFallback": null,
  "latestKnownCompensationCents": null,
  "latestKnownBaseSalaryCents": null,
  "latestKnownCompensationType": null,
  "latestKnownSourceYear": null,
  "latestKnownSourceCompensationId": null,
  "latestKnownSourceRawContractId": null,
  "seasonYearStr": null,
  "baseCompCents": null,
  "totalCompCents": null,
  "compensationType": null,
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


