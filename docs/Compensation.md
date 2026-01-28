
# Compensation


## Properties

Name | Type
------------ | -------------
`id` | number
`bonusCompCents` | number
`deferredCompCents` | number
`talentFee` | number
`isCarProvided` | boolean
`countryClubDuesCents` | number
`coachId` | number
`buyoutTerms` | string
`executedOn` | Date
`expiresOn` | Date
`startOn` | Date
`endOn` | Date
`averageYearlyCompCents` | number
`createdAt` | Date
`updatedAt` | Date
`outsideIncomeCents` | number
`oneTimeBonusCents` | number
`comment` | string
`countryClubMembershipPaid` | boolean
`baseSalaryCents` | number
`bonusHasContingents` | boolean
`calculatedGuaranteedCompCents` | number
`contingentBonus` | boolean
`noncontingentBonusCompCents` | number
`compensationType` | string
`mediaLink` | string
`contractStatusId` | number
`year` | number
`schoolId` | number
`contract` | [Contract](Contract.md)

## Example

```typescript
import type { Compensation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "bonusCompCents": 10000,
  "deferredCompCents": 10000,
  "talentFee": 10000,
  "isCarProvided": false,
  "countryClubDuesCents": 10000,
  "coachId": 1,
  "buyoutTerms": This is a buyout term,
  "executedOn": 2019-01-01T00:00Z,
  "expiresOn": 2019-01-01T00:00Z,
  "startOn": 2019-01-01T00:00Z,
  "endOn": 2019-01-01T00:00Z,
  "averageYearlyCompCents": 10000,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "outsideIncomeCents": 10000,
  "oneTimeBonusCents": 10000,
  "comment": This is a comment,
  "countryClubMembershipPaid": false,
  "baseSalaryCents": 10000,
  "bonusHasContingents": false,
  "calculatedGuaranteedCompCents": 10000,
  "contingentBonus": true,
  "noncontingentBonusCompCents": 10000,
  "compensationType": This is a compensation type,
  "mediaLink": This is a media link,
  "contractStatusId": 1,
  "year": 2019,
  "schoolId": 1,
  "contract": null,
} satisfies Compensation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Compensation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


