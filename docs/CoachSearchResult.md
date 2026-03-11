
# CoachSearchResult


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`schoolName` | string
`schoolShortName` | string
`schoolId` | number
`conferenceName` | string
`conferenceId` | number
`divisionName` | string
`divisionId` | number
`year` | number
`coachFriendlyId` | string
`positionTypes` | Array&lt;string&gt;
`sportName` | string
`sportFullName` | string
`positionTitle` | string
`seasonWins` | number
`seasonLosses` | number
`seasonTies` | number
`seasonConferencePosition` | number
`seasonConferenceNumPositions` | number
`rpi` | number
`compensationCents` | number
`baseSalaryCents` | number
`coli` | number
`compensationType` | string
`compensationContingentBonus` | boolean
`compensationDeferredCompCents` | number
`compensationOneTimeBonusCents` | number
`compensationBuyoutTerms` | string
`compensationIsCarProvided` | boolean
`compensationOutsideIncomeCents` | number
`compensationTalentFee` | number
`compensationCountyClubMembershipPaid` | boolean
`compensationMediaLink` | string
`contractStartsOn` | Date
`contractExpiresOn` | Date
`contractAtWill` | boolean
`rawContractId` | number
`avatarUrl` | string

## Example

```typescript
import type { CoachSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "schoolName": null,
  "schoolShortName": null,
  "schoolId": null,
  "conferenceName": null,
  "conferenceId": null,
  "divisionName": null,
  "divisionId": null,
  "year": null,
  "coachFriendlyId": null,
  "positionTypes": null,
  "sportName": null,
  "sportFullName": null,
  "positionTitle": null,
  "seasonWins": null,
  "seasonLosses": null,
  "seasonTies": null,
  "seasonConferencePosition": null,
  "seasonConferenceNumPositions": null,
  "rpi": null,
  "compensationCents": null,
  "baseSalaryCents": null,
  "coli": null,
  "compensationType": null,
  "compensationContingentBonus": null,
  "compensationDeferredCompCents": null,
  "compensationOneTimeBonusCents": null,
  "compensationBuyoutTerms": null,
  "compensationIsCarProvided": null,
  "compensationOutsideIncomeCents": null,
  "compensationTalentFee": null,
  "compensationCountyClubMembershipPaid": null,
  "compensationMediaLink": null,
  "contractStartsOn": null,
  "contractExpiresOn": null,
  "contractAtWill": null,
  "rawContractId": null,
  "avatarUrl": null,
} satisfies CoachSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


