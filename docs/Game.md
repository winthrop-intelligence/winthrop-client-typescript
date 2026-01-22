
# Game


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`gameDate` | Date
`createdAt` | Date
`updatedAt` | Date
`neutral` | boolean
`city` | string
`gameContractId` | number
`stateId` | number
`description` | string
`inConference` | boolean
`seasonYearTbd` | number
`homeSchoolScore` | number
`awaySchoolScore` | number
`overtime` | number
`seasonYear` | number

## Example

```typescript
import type { Game } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "homeSchoolId": 2,
  "awaySchoolId": 3,
  "sportId": 4,
  "gameDate": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "neutral": false,
  "city": This is a city,
  "gameContractId": 5,
  "stateId": 6,
  "description": This is a description,
  "inConference": false,
  "seasonYearTbd": 7,
  "homeSchoolScore": 8,
  "awaySchoolScore": 9,
  "overtime": 10,
  "seasonYear": 11,
} satisfies Game

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Game
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


