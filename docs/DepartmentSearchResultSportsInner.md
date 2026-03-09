
# DepartmentSearchResultSportsInner


## Properties

Name | Type
------------ | -------------
`sportName` | string
`sportKey` | string
`headCoachName` | string
`headCoachId` | number
`headCoachSalaryCents` | number
`asstPoolCents` | number
`revenueCents` | number
`expenseCents` | number
`avgGuaranteePaidCents` | number
`avgGuaranteeReceivedCents` | number
`record` | string
`conferenceRecord` | string
`rpi` | number

## Example

```typescript
import type { DepartmentSearchResultSportsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportName": null,
  "sportKey": null,
  "headCoachName": null,
  "headCoachId": null,
  "headCoachSalaryCents": null,
  "asstPoolCents": null,
  "revenueCents": null,
  "expenseCents": null,
  "avgGuaranteePaidCents": null,
  "avgGuaranteeReceivedCents": null,
  "record": null,
  "conferenceRecord": null,
  "rpi": null,
} satisfies DepartmentSearchResultSportsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentSearchResultSportsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


