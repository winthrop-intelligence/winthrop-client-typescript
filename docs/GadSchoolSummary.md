
# GadSchoolSummary

Per-school median / mean / min / max / count over the requested season window. Returned only when include_school_summary=true and inputs are valid.

## Properties

Name | Type
------------ | -------------
`school` | [GadSchoolSummarySchool](GadSchoolSummarySchool.md)
`sport` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`seasonWindow` | string
`includedSeasons` | Array&lt;number&gt;
`medianPaidOutCents` | number
`medianReceivedCents` | number
`meanPaidOutCents` | number
`meanReceivedCents` | number
`minPaidOutCents` | number
`maxPaidOutCents` | number
`minReceivedCents` | number
`maxReceivedCents` | number
`totalPaidOutCents` | number
`totalReceivedCents` | number
`paidOutAgreementCount` | number
`receivedAgreementCount` | number
`permissionFilteredCount` | number
`sourceUpdatedAt` | Date
`caveats` | Array&lt;string&gt;

## Example

```typescript
import type { GadSchoolSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "sport": null,
  "seasonWindow": null,
  "includedSeasons": null,
  "medianPaidOutCents": null,
  "medianReceivedCents": null,
  "meanPaidOutCents": null,
  "meanReceivedCents": null,
  "minPaidOutCents": null,
  "maxPaidOutCents": null,
  "minReceivedCents": null,
  "maxReceivedCents": null,
  "totalPaidOutCents": null,
  "totalReceivedCents": null,
  "paidOutAgreementCount": null,
  "receivedAgreementCount": null,
  "permissionFilteredCount": null,
  "sourceUpdatedAt": null,
  "caveats": null,
} satisfies GadSchoolSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadSchoolSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


