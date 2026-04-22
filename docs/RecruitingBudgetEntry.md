
# RecruitingBudgetEntry


## Properties

Name | Type
------------ | -------------
`schoolName` | string
`schoolId` | number
`budgetCents` | number
`classRank` | number
`conferenceRecord` | string

## Example

```typescript
import type { RecruitingBudgetEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolName": null,
  "schoolId": null,
  "budgetCents": null,
  "classRank": null,
  "conferenceRecord": null,
} satisfies RecruitingBudgetEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecruitingBudgetEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


