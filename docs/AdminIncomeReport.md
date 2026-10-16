
# AdminIncomeReport

An outside income report for a coach

## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`year` | number
`contractStatusId` | number
`rawContractId` | number
`notes` | string
`label` | string
`createdAt` | Date
`updatedAt` | Date
`coach` | [AdminIncomeReportCoachSummary](AdminIncomeReportCoachSummary.md)
`contractStatus` | [AdminIncomeReportContractStatusSummary](AdminIncomeReportContractStatusSummary.md)
`rawContract` | [AdminIncomeReportRawContractSummary](AdminIncomeReportRawContractSummary.md)

## Example

```typescript
import type { AdminIncomeReport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "year": null,
  "contractStatusId": null,
  "rawContractId": null,
  "notes": null,
  "label": null,
  "createdAt": null,
  "updatedAt": null,
  "coach": null,
  "contractStatus": null,
  "rawContract": null,
} satisfies AdminIncomeReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminIncomeReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


