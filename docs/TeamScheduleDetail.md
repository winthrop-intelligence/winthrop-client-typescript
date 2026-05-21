
# TeamScheduleDetail


## Properties

Name | Type
------------ | -------------
`school` | [TeamScheduleDetailSchool](TeamScheduleDetailSchool.md)
`sport` | [TeamScheduleDetailSport](TeamScheduleDetailSport.md)
`seasonYear` | number
`performanceYear` | number
`season` | [TeamScheduleDetailSeason](TeamScheduleDetailSeason.md)
`headCoach` | [TeamScheduleDetailHeadCoach](TeamScheduleDetailHeadCoach.md)
`nonConfGamesCount` | number
`filTeamId` | string
`availableYears` | Array&lt;number&gt;
`contacts` | [Array&lt;TeamScheduleContact&gt;](TeamScheduleContact.md)
`games` | [Array&lt;TeamScheduleDetailGame&gt;](TeamScheduleDetailGame.md)

## Example

```typescript
import type { TeamScheduleDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "sport": null,
  "seasonYear": null,
  "performanceYear": null,
  "season": null,
  "headCoach": null,
  "nonConfGamesCount": null,
  "filTeamId": null,
  "availableYears": null,
  "contacts": null,
  "games": null,
} satisfies TeamScheduleDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


