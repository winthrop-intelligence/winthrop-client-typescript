
# School


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`shortName` | string
`location` | string
`createdAt` | Date
`updatedAt` | Date
`city` | string
`nickname` | string
`externalUrl` | string
`colors` | string
`state` | string
`primaryConferenceId` | number
`costOfLivingIndexCityCode` | string
`currentDirectorsCupRanking` | number
`currentUsnwrRanking` | number
`_private` | boolean
`schoolClassificationId` | number
`logoUpdatedAt` | Date
`youtubeSearchName` | string
`latitude` | number
`longitude` | number
`address1` | string
`address2` | string
`zipCode` | string
`logoImage` | [Logo](Logo.md)
`athleticDirector` | [Coach](Coach.md)
`athleticsUrl` | string
`wikipediaUrl` | string
`athleticsWikipediaUrl` | string
`externalLogoImage` | [Logo](Logo.md)
`schoolStatus` | string
`athleticsInstagramHandle` | string
`athleticsTwitterHandle` | string
`externalInstagramHandle` | string
`externalTwitterHandle` | string
`ncaaId` | number
`conference` | [Conference](Conference.md)
`division` | [Division](Division.md)
`subdivisions` | [Array&lt;Subdivision&gt;](Subdivision.md)

## Example

```typescript
import type { School } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": University of Alabama,
  "shortName": Alabama,
  "location": Tuscaloosa, AL,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "city": Tuscaloosa,
  "nickname": Crimson Tide,
  "externalUrl": http://www.rolltide.com,
  "colors": Crimson, White,
  "state": AL,
  "primaryConferenceId": 1,
  "costOfLivingIndexCityCode": 01-46220-900,
  "currentDirectorsCupRanking": 27,
  "currentUsnwrRanking": 153,
  "_private": false,
  "schoolClassificationId": 18,
  "logoUpdatedAt": 2019-01-01T00:00Z,
  "youtubeSearchName": University of Alabama,
  "latitude": 33.2098,
  "longitude": -87.5692,
  "address1": 739 University Blvd,
  "address2": Box 870158,
  "zipCode": 35487,
  "logoImage": null,
  "athleticDirector": null,
  "athleticsUrl": ,
  "wikipediaUrl": ,
  "athleticsWikipediaUrl": ,
  "externalLogoImage": null,
  "schoolStatus": null,
  "athleticsInstagramHandle": ,
  "athleticsTwitterHandle": ,
  "externalInstagramHandle": ,
  "externalTwitterHandle": ,
  "ncaaId": 306,
  "conference": null,
  "division": null,
  "subdivisions": null,
} satisfies School

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as School
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


