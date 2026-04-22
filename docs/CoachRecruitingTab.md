
# CoachRecruitingTab


## Properties

Name | Type
------------ | -------------
`leaderAd` | boolean
`positions` | [Array&lt;RecruitingPositionEntry&gt;](RecruitingPositionEntry.md)
`conferenceComparison` | [CoachRecruitingTabConferenceComparison](CoachRecruitingTabConferenceComparison.md)
`canSeeFinancials` | boolean
`recruitingBudgets` | [CoachRecruitingTabRecruitingBudgets](CoachRecruitingTabRecruitingBudgets.md)
`sportBudgets` | [CoachRecruitingTabRecruitingBudgets](CoachRecruitingTabRecruitingBudgets.md)
`chartData` | [RecruitingChartData](RecruitingChartData.md)
`metadata` | [CoachRecruitingTabMetadata](CoachRecruitingTabMetadata.md)

## Example

```typescript
import type { CoachRecruitingTab } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "leaderAd": null,
  "positions": null,
  "conferenceComparison": null,
  "canSeeFinancials": null,
  "recruitingBudgets": null,
  "sportBudgets": null,
  "chartData": null,
  "metadata": null,
} satisfies CoachRecruitingTab

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachRecruitingTab
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


