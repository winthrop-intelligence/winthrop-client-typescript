
# GamePostSearchResult

Enriched game post search result with school, location, and RPI data

## Properties

Name | Type
------------ | -------------
`gamePostId` | number
`id` | number
`schoolId` | number
`schoolName` | string
`sportId` | number
`sportName` | string
`startDate` | Date
`endDate` | Date
`endDateDisplay` | Date
`description` | string
`status` | string
`expiresOn` | Date
`createdAt` | Date
`updatedAt` | Date
`city` | string
`stateName` | string
`conferenceId` | number
`conferenceName` | string
`divisionId` | number
`divisionName` | string
`lastRpi` | number
`distance` | number
`avgGuaranteePaid` | number
`avgGuaranteeReceived` | number
`gameTypesDisplay` | string
`latitude` | number
`longitude` | number

## Example

```typescript
import type { GamePostSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "gamePostId": null,
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "sportId": null,
  "sportName": null,
  "startDate": null,
  "endDate": null,
  "endDateDisplay": null,
  "description": null,
  "status": null,
  "expiresOn": null,
  "createdAt": null,
  "updatedAt": null,
  "city": null,
  "stateName": null,
  "conferenceId": null,
  "conferenceName": null,
  "divisionId": null,
  "divisionName": null,
  "lastRpi": null,
  "distance": null,
  "avgGuaranteePaid": null,
  "avgGuaranteeReceived": null,
  "gameTypesDisplay": null,
  "latitude": null,
  "longitude": null,
} satisfies GamePostSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


