
# DepartmentCoachesContractClocks


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


