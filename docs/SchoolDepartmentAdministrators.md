
# SchoolDepartmentAdministrators


## Properties

Name | Type
------------ | -------------
`school` | [SchoolDepartmentGuaranteesSchool](SchoolDepartmentGuaranteesSchool.md)
`conference` | [SchoolDepartmentOverviewConference](SchoolDepartmentOverviewConference.md)
`mode` | string
`selectedYear` | number
`availableYears` | Array&lt;number&gt;
`compVisible` | boolean
`staffCount` | number
`staff` | [Array&lt;DepartmentAdministratorStaffRow&gt;](DepartmentAdministratorStaffRow.md)
`staffStats` | [DepartmentAdministratorsStaffStats](DepartmentAdministratorsStaffStats.md)
`adOffice` | [DepartmentAdministratorsAdOffice](DepartmentAdministratorsAdOffice.md)
`recentMoves` | [Array&lt;DepartmentAdministratorsRecentMove&gt;](DepartmentAdministratorsRecentMove.md)
`scorecard` | [DepartmentAdministratorsScorecard](DepartmentAdministratorsScorecard.md)
`scorecardGap` | [DepartmentAdministratorsScorecardGap](DepartmentAdministratorsScorecardGap.md)
`officers990` | [Array&lt;DepartmentAdministrators990Officer&gt;](DepartmentAdministrators990Officer.md)
`adProfile` | [DepartmentAdministratorsAdProfile](DepartmentAdministratorsAdProfile.md)
`basis` | [DepartmentAdministratorsBasis](DepartmentAdministratorsBasis.md)

## Example

```typescript
import type { SchoolDepartmentAdministrators } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "conference": null,
  "mode": null,
  "selectedYear": null,
  "availableYears": null,
  "compVisible": null,
  "staffCount": null,
  "staff": null,
  "staffStats": null,
  "adOffice": null,
  "recentMoves": null,
  "scorecard": null,
  "scorecardGap": null,
  "officers990": null,
  "adProfile": null,
  "basis": null,
} satisfies SchoolDepartmentAdministrators

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolDepartmentAdministrators
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


