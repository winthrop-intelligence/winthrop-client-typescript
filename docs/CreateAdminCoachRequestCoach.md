
# CreateAdminCoachRequestCoach


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`alternateName` | string
`dob` | Date
`gender` | string
`hometownCity` | string
`hometownStateId` | number
`almaMaterId` | number
`almaMaterYear` | string
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
`avatarAttributes` | [CreateAdminCoachRequestCoachAvatarAttributes](CreateAdminCoachRequestCoachAvatarAttributes.md)

## Example

```typescript
import type { CreateAdminCoachRequestCoach } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "alternateName": null,
  "dob": null,
  "gender": null,
  "hometownCity": null,
  "hometownStateId": null,
  "almaMaterId": null,
  "almaMaterYear": null,
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
  "avatarAttributes": null,
} satisfies CreateAdminCoachRequestCoach

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminCoachRequestCoach
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


