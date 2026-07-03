
# GamePostSearchResult

Enriched game post search result with school, location, and ranking data

## Properties

Name | Type
------------ | -------------
`id` | number
`publishGroupId` | string
`schoolId` | number
`schoolName` | string
`sportId` | number
`sportName` | string
`startDate` | Date
`endDateDisplay` | Date
`description` | string
`createdAt` | Date
`city` | string
`stateName` | string
`lastRpi` | number
`distance` | number
`gameTypesDisplay` | string
`createdByName` | string
`createdBySchedulingPhone` | string
`createdBySchedulingPhoneDial` | string
`avgNetRank` | number
`schoolLogoUrl` | string
`posts` | [Array&lt;GamePostSearchResultPostsInner&gt;](GamePostSearchResultPostsInner.md)
`games` | [Array&lt;GamePostSearchResultGamesInner&gt;](GamePostSearchResultGamesInner.md)
`scheduleIntents` | [Array&lt;GamePostSearchResultScheduleIntentsInner&gt;](GamePostSearchResultScheduleIntentsInner.md)
`contacts` | [Array&lt;GamePostSearchResultContactsInner&gt;](GamePostSearchResultContactsInner.md)

## Example

```typescript
import type { GamePostSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "publishGroupId": null,
  "schoolId": null,
  "schoolName": null,
  "sportId": null,
  "sportName": null,
  "startDate": null,
  "endDateDisplay": null,
  "description": null,
  "createdAt": null,
  "city": null,
  "stateName": null,
  "lastRpi": null,
  "distance": null,
  "gameTypesDisplay": null,
  "createdByName": null,
  "createdBySchedulingPhone": null,
  "createdBySchedulingPhoneDial": null,
  "avgNetRank": null,
  "schoolLogoUrl": null,
  "posts": null,
  "games": null,
  "scheduleIntents": null,
  "contacts": null,
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


