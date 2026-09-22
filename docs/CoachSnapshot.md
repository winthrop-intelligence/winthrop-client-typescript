
# CoachSnapshot


## Properties

Name | Type
------------ | -------------
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


