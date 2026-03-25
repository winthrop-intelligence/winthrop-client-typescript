
# CoachProfile


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`email` | string
`phone` | string
`leader` | boolean
`hometownCity` | string
`hometownState` | string
`almaMaterName` | string
`almaMaterYear` | number
`twitterHandle` | string
`twitterVerified` | boolean
`linkedin` | string
`linkedinVerified` | boolean
`instagramHandle` | string
`instagramVerified` | boolean
`bio` | string
`coachFriendlyId` | string
`departing` | boolean
`currentSchoolName` | string
`currentSchoolId` | number
`currentSportName` | string
`currentPositionTypes` | Array&lt;string&gt;
`avatarUrl` | string
`canSeeCompensation` | boolean
`canSeeVideos` | boolean
`canSeeCoworkerHistory` | boolean
`isSportSpecific` | boolean

## Example

```typescript
import type { CoachProfile } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "phone": null,
  "leader": null,
  "hometownCity": null,
  "hometownState": null,
  "almaMaterName": null,
  "almaMaterYear": null,
  "twitterHandle": null,
  "twitterVerified": null,
  "linkedin": null,
  "linkedinVerified": null,
  "instagramHandle": null,
  "instagramVerified": null,
  "bio": null,
  "coachFriendlyId": null,
  "departing": null,
  "currentSchoolName": null,
  "currentSchoolId": null,
  "currentSportName": null,
  "currentPositionTypes": null,
  "avatarUrl": null,
  "canSeeCompensation": null,
  "canSeeVideos": null,
  "canSeeCoworkerHistory": null,
  "isSportSpecific": null,
} satisfies CoachProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


