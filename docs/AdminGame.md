
# AdminGame


## Properties

Name | Type
------------ | -------------
`homeSchoolId` | number
`homeSchoolScore` | number
`awaySchoolId` | number
`awaySchoolScore` | number
`overtime` | number
`sportId` | number
`description` | string
`gameDate` | Date
`seasonYearTbd` | number
`gameContractId` | number
`city` | string
`stateId` | number
`neutral` | boolean
`id` | number
`inConference` | boolean
`gameContractDisplay` | string
`homeSchool` | [AdminGameSchoolRef](AdminGameSchoolRef.md)
`awaySchool` | [AdminGameSchoolRef](AdminGameSchoolRef.md)
`sport` | [AdminGameSportRef](AdminGameSportRef.md)
`state` | [AdminGameStateRef](AdminGameStateRef.md)

## Example

```typescript
import type { AdminGame } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "homeSchoolId": null,
  "homeSchoolScore": null,
  "awaySchoolId": null,
  "awaySchoolScore": null,
  "overtime": null,
  "sportId": null,
  "description": null,
  "gameDate": null,
  "seasonYearTbd": null,
  "gameContractId": null,
  "city": null,
  "stateId": null,
  "neutral": null,
  "id": null,
  "inConference": null,
  "gameContractDisplay": null,
  "homeSchool": null,
  "awaySchool": null,
  "sport": null,
  "state": null,
} satisfies AdminGame

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGame
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


