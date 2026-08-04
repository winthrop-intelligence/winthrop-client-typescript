
# AthleticProfileShowSportCoachStaff

Coach & Staff tab payload for a sport scope; null for ADMIN scope. Compensation fields are null (never zero) when unfiled or not permitted.

## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`conferenceName` | string
`quadrantPoints` | [Array&lt;AthleticProfileShowSportCoachStaffQuadrantPointsInner&gt;](AthleticProfileShowSportCoachStaffQuadrantPointsInner.md)
`headCoach` | [AthleticProfileShowSportCoachStaffHeadCoach](AthleticProfileShowSportCoachStaffHeadCoach.md)
`assistants` | [Array&lt;AthleticProfileShowSportCoachStaffAssistantsInner&gt;](AthleticProfileShowSportCoachStaffAssistantsInner.md)
`staffPool` | [AthleticProfileShowSportCoachStaffStaffPool](AthleticProfileShowSportCoachStaffStaffPool.md)
`supportStaff` | [Array&lt;AthleticProfileShowSportCoachStaffSupportStaffInner&gt;](AthleticProfileShowSportCoachStaffSupportStaffInner.md)
`asOf` | Date

## Example

```typescript
import type { AthleticProfileShowSportCoachStaff } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "conferenceName": null,
  "quadrantPoints": null,
  "headCoach": null,
  "assistants": null,
  "staffPool": null,
  "supportStaff": null,
  "asOf": null,
} satisfies AthleticProfileShowSportCoachStaff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportCoachStaff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


