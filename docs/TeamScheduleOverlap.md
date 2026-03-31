
# TeamScheduleOverlap


## Properties

Name | Type
------------ | -------------
`hasOverlap` | boolean
`seasonLabel` | string
`teamSchoolName` | string
`userSchoolName` | string
`months` | Array&lt;Date&gt;
`teamGames` | [Array&lt;TeamScheduleOverlapTeamGamesInner&gt;](TeamScheduleOverlapTeamGamesInner.md)
`userGames` | [Array&lt;TeamScheduleOverlapTeamGamesInner&gt;](TeamScheduleOverlapTeamGamesInner.md)

## Example

```typescript
import type { TeamScheduleOverlap } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "hasOverlap": null,
  "seasonLabel": null,
  "teamSchoolName": null,
  "userSchoolName": null,
  "months": null,
  "teamGames": null,
  "userGames": null,
} satisfies TeamScheduleOverlap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleOverlap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


