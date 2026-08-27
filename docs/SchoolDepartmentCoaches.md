
# SchoolDepartmentCoaches


## Properties

Name | Type
------------ | -------------
`school` | [SchoolDepartmentGuaranteesSchool](SchoolDepartmentGuaranteesSchool.md)
`conference` | [SchoolDepartmentOverviewConference](SchoolDepartmentOverviewConference.md)
`mode` | string
`selectedYear` | number
`availableYears` | Array&lt;number&gt;
`seatCount` | number
`resultWindow` | [DepartmentCoachesResultWindow](DepartmentCoachesResultWindow.md)
`seats` | [Array&lt;DepartmentCoachSeat&gt;](DepartmentCoachSeat.md)
`quadrant` | [DepartmentCoachesQuadrant](DepartmentCoachesQuadrant.md)
`portfolioShape` | [DepartmentCoachesPortfolioShape](DepartmentCoachesPortfolioShape.md)
`contractClocks` | [DepartmentCoachesContractClocks](DepartmentCoachesContractClocks.md)
`basis` | [DepartmentCoachesBasis](DepartmentCoachesBasis.md)

## Example

```typescript
import type { SchoolDepartmentCoaches } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "conference": null,
  "mode": null,
  "selectedYear": null,
  "availableYears": null,
  "seatCount": null,
  "resultWindow": null,
  "seats": null,
  "quadrant": null,
  "portfolioShape": null,
  "contractClocks": null,
  "basis": null,
} satisfies SchoolDepartmentCoaches

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolDepartmentCoaches
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


