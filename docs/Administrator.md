
# Administrator


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`coachFirstName` | string
`coachLastName` | string
`coachName` | string
`seasonId` | number
`positionId` | number
`schoolId` | number
`conferenceId` | number
`divisionId` | number
`geoDivisionId` | number
`compensationId` | number
`contractId` | number
`year` | number
`positionTitle` | string
`schoolName` | string
`schoolShortName` | string
`state` | string
`usnwrRanking` | number
`directorsCupRanking` | number
`compensationCents` | number
`compensationBaseSalaryCents` | number
`compensationType` | string
`compensationOutsideIncomeCents` | number
`compensationDeferredCompCents` | number
`compensationOneTimeBonusCents` | number
`compensationContingentBonus` | boolean
`compensationBuyoutTerms` | string
`compensationIsCarProvided` | boolean
`compensationCountryClubDuesCents` | number
`compensationCountryClubMembershipPaid` | boolean
`compensationMediaLink` | string
`contractStartsOn` | Date
`contractExpiresOn` | Date
`diversity` | boolean
`gender` | string
`almaMaterId` | number
`_private` | boolean
`sportId` | number
`coli` | number
`coach` | [Coach](Coach.md)
`departments` | [Array&lt;PositionType&gt;](PositionType.md)

## Example

```typescript
import type { Administrator } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "coachId": 1,
  "coachFirstName": John,
  "coachLastName": Doe,
  "coachName": John Doe,
  "seasonId": 1,
  "positionId": 1,
  "schoolId": 1,
  "conferenceId": 1,
  "divisionId": 1,
  "geoDivisionId": 1,
  "compensationId": 1,
  "contractId": 1,
  "year": 2019,
  "positionTitle": This is a position title,
  "schoolName": This is a school name,
  "schoolShortName": This is a school short name,
  "state": This is a state,
  "usnwrRanking": 1,
  "directorsCupRanking": 1,
  "compensationCents": 10000,
  "compensationBaseSalaryCents": 10000,
  "compensationType": null,
  "compensationOutsideIncomeCents": 10000,
  "compensationDeferredCompCents": 10000,
  "compensationOneTimeBonusCents": 10000,
  "compensationContingentBonus": true,
  "compensationBuyoutTerms": This is a compensation buyout terms,
  "compensationIsCarProvided": true,
  "compensationCountryClubDuesCents": 10000,
  "compensationCountryClubMembershipPaid": false,
  "compensationMediaLink": This is a compensation media link,
  "contractStartsOn": Mon Dec 31 18:00:00 CST 2018,
  "contractExpiresOn": Mon Dec 31 18:00:00 CST 2018,
  "diversity": false,
  "gender": M,
  "almaMaterId": 2,
  "_private": false,
  "sportId": 2089953594,
  "coli": 11.09,
  "coach": null,
  "departments": null,
} satisfies Administrator

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Administrator
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


