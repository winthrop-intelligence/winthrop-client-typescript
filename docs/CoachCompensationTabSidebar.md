
# CoachCompensationTabSidebar


## Properties

Name | Type
------------ | -------------
`contracts` | [Array&lt;CoachCompensationTabSidebarContractsInner&gt;](CoachCompensationTabSidebarContractsInner.md)
`incomeReports` | [Array&lt;CoachCompensationTabSidebarIncomeReportsInner&gt;](CoachCompensationTabSidebarIncomeReportsInner.md)
`coachingStaff` | [Array&lt;CoachCompensationTabSidebarCoachingStaffInner&gt;](CoachCompensationTabSidebarCoachingStaffInner.md)
`staffTitle` | string
`asstPoolSpendCents` | number
`coli` | [ColiData](ColiData.md)

## Example

```typescript
import type { CoachCompensationTabSidebar } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "contracts": null,
  "incomeReports": null,
  "coachingStaff": null,
  "staffTitle": null,
  "asstPoolSpendCents": null,
  "coli": null,
} satisfies CoachCompensationTabSidebar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachCompensationTabSidebar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


