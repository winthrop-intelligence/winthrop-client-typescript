
# IncomeReportInput

Fields for POST/PATCH /income_reports, sent at the top level of the JSON body beside change_note. PATCH changes only the fields sent.

## Properties

Name | Type
------------ | -------------
`coachId` | number
`rawContractId` | number
`year` | number
`notes` | string
`contractStatusId` | number
`changeNote` | string

## Example

```typescript
import type { IncomeReportInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": 2,
  "rawContractId": 3,
  "year": 2011,
  "notes": null,
  "contractStatusId": 5,
  "changeNote": null,
} satisfies IncomeReportInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeReportInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


