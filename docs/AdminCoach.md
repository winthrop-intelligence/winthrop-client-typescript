
# AdminCoach


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`alternateName` | string
`dob` | Date
`gender` | string
`hometownCity` | string
`almaMaterYear` | string
`yearsOfExperience` | number
`externalYearsExperience` | number
`diversity` | boolean
`bio` | string
`bioText` | string
`email` | string
`emailScrapingDisabled` | boolean
`phone` | string
`mobilePhone` | string
`twitterHandle` | string
`twitterScrapingDisabled` | boolean
`facebook` | string
`linkedin` | string
`linkedinScrapingDisabled` | boolean
`youtubeSearch` | string
`instagramHandle` | string
`instagramScrapingDisabled` | boolean
`avatarScrapingDisabled` | boolean
`leader` | boolean
`createdAt` | Date
`updatedAt` | Date
`name` | string
`slug` | string
`hometownState` | [AdminCoachHometownState](AdminCoachHometownState.md)
`almaMater` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`avatar` | [AdminCoachAvatar](AdminCoachAvatar.md)
`currentSchool` | [AdminCoachCurrentSchool](AdminCoachCurrentSchool.md)
`currentSport` | [AdminCoachCurrentSport](AdminCoachCurrentSport.md)
`currentPosition` | [AdminCoachCurrentPosition](AdminCoachCurrentPosition.md)
`positionsBySport` | [Array&lt;AdminCoachPositionsBySportInner&gt;](AdminCoachPositionsBySportInner.md)
`blockedSections` | [AdminCoachBlockedSections](AdminCoachBlockedSections.md)

## Example

```typescript
import type { AdminCoach } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "alternateName": null,
  "dob": null,
  "gender": null,
  "hometownCity": null,
  "almaMaterYear": null,
  "yearsOfExperience": null,
  "externalYearsExperience": null,
  "diversity": null,
  "bio": null,
  "bioText": null,
  "email": null,
  "emailScrapingDisabled": null,
  "phone": null,
  "mobilePhone": null,
  "twitterHandle": null,
  "twitterScrapingDisabled": null,
  "facebook": null,
  "linkedin": null,
  "linkedinScrapingDisabled": null,
  "youtubeSearch": null,
  "instagramHandle": null,
  "instagramScrapingDisabled": null,
  "avatarScrapingDisabled": null,
  "leader": null,
  "createdAt": null,
  "updatedAt": null,
  "name": null,
  "slug": null,
  "hometownState": null,
  "almaMater": null,
  "avatar": null,
  "currentSchool": null,
  "currentSport": null,
  "currentPosition": null,
  "positionsBySport": null,
  "blockedSections": null,
} satisfies AdminCoach

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoach
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


