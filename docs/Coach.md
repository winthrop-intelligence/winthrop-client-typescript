
# Coach


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`email` | string
`phone` | string
`leader` | boolean
`bio` | string
`bioText` | string
`dob` | Date
`almaMaterId` | number
`almaMaterYear` | string
`hometownCity` | string
`hometownState` | string
`twitterHandle` | string
`linkedin` | string
`instagramHandle` | string
`currentTenureYears` | number
`avatar` | [Avatar](Avatar.md)
`yearsOfExperience` | number
`externalYearsExperience` | number
`athleticYearsOfExperience` | number
`avatarScrapingDisabled` | boolean
`latestSalary` | number
`latestSalaryYear` | number
`lastBioTextUpdatedAt` | Date
`instagramScrapingDisabled` | boolean
`linkedinScrapingDisabled` | boolean
`twitterScrapingDisabled` | boolean
`emailScrapingDisabled` | boolean
`mobilityIndex` | number
`hasNewJob` | boolean

## Example

```typescript
import type { Coach } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "firstName": John,
  "lastName": Doe,
  "email": jdoe@alabama.edu,
  "phone": 555-555-5555,
  "leader": false,
  "bio": https://rolltide.com/staff-directory/greg-byrne/519,
  "bioText": Example Bio Text,
  "dob": Mon Dec 31 18:00:00 CST 2018,
  "almaMaterId": 1,
  "almaMaterYear": 2009,
  "hometownCity": Omaha,
  "hometownState": PA,
  "twitterHandle": Example_User3,
  "linkedin": example-user-9974688,
  "instagramHandle": example_User4,
  "currentTenureYears": 1,
  "avatar": null,
  "yearsOfExperience": 1,
  "externalYearsExperience": 1,
  "athleticYearsOfExperience": 1,
  "avatarScrapingDisabled": false,
  "latestSalary": 1,
  "latestSalaryYear": 2000,
  "lastBioTextUpdatedAt": 2019-01-01T00:00Z,
  "instagramScrapingDisabled": false,
  "linkedinScrapingDisabled": false,
  "twitterScrapingDisabled": false,
  "emailScrapingDisabled": false,
  "mobilityIndex": 5,
  "hasNewJob": false,
} satisfies Coach

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Coach
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


