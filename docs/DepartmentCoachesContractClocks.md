
# DepartmentCoachesContractClocks

Every row is a contract on the clock. Seats and assistants with no contract on file are left out of both lists, and so are contracts that have already ended: the clock is measured from today whatever season is selected, so a historical season keeps only the deals still running now. Either list can be empty.

## Properties

Name | Type
------------ | -------------
`horizonMonths` | number
`renewalWindowMonths` | number
`rows` | [Array&lt;DepartmentCoachesClockRow&gt;](DepartmentCoachesClockRow.md)
`allSeats` | [Array&lt;DepartmentCoachesClockRow&gt;](DepartmentCoachesClockRow.md)

## Example

```typescript
import type { DepartmentCoachesContractClocks } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "horizonMonths": null,
  "renewalWindowMonths": null,
  "rows": null,
  "allSeats": null,
} satisfies DepartmentCoachesContractClocks

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachesContractClocks
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


