
# DepartmentCoachSeat


## Properties

Name | Type
------------ | -------------
`sport` | [DepartmentCoachSeatSport](DepartmentCoachSeatSport.md)
`coach` | [DepartmentCoachSeatCoach](DepartmentCoachSeatCoach.md)
`pay` | [DepartmentCoachPay](DepartmentCoachPay.md)
`result` | [DepartmentCoachResult](DepartmentCoachResult.md)
`verdict` | [DepartmentCoachVerdict](DepartmentCoachVerdict.md)
`quadrantPoint` | [DepartmentCoachQuadrantPoint](DepartmentCoachQuadrantPoint.md)
`unplottedReason` | string

## Example

```typescript
import type { DepartmentCoachSeat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sport": null,
  "coach": null,
  "pay": null,
  "result": null,
  "verdict": null,
  "quadrantPoint": null,
  "unplottedReason": null,
} satisfies DepartmentCoachSeat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachSeat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


