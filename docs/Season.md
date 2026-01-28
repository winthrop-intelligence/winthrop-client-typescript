
# Season


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`schoolId` | number
`sportId` | number
`year` | number
`wins` | number
`losses` | number
`conferenceWins` | number
`conferenceLosses` | number
`apr` | number
`createdAt` | Date
`updatedAt` | Date
`winPercent` | number
`ties` | number
`rpi` | number
`prevRpi` | number
`conferencePosition` | number
`conferenceNumPositions` | number
`coachApr` | number
`attendance` | number
`conferenceTies` | number
`recruitRanking` | number
`offensiveEfficiency` | number
`defensiveEfficiency` | number
`sosRanking` | number
`sos` | number
`homeWins` | number
`homeLosses` | number
`homeWinPercent` | number
`asr` | number

## Example

```typescript
import type { Season } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "schoolId": null,
  "sportId": null,
  "year": null,
  "wins": null,
  "losses": null,
  "conferenceWins": null,
  "conferenceLosses": null,
  "apr": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "winPercent": null,
  "ties": null,
  "rpi": null,
  "prevRpi": null,
  "conferencePosition": null,
  "conferenceNumPositions": null,
  "coachApr": null,
  "attendance": null,
  "conferenceTies": null,
  "recruitRanking": null,
  "offensiveEfficiency": null,
  "defensiveEfficiency": null,
  "sosRanking": null,
  "sos": null,
  "homeWins": null,
  "homeLosses": null,
  "homeWinPercent": null,
  "asr": null,
} satisfies Season

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Season
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


