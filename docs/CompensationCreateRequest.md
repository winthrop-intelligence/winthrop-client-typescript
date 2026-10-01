
# CompensationCreateRequest


## Properties

Name | Type
------------ | -------------
`coachId` | number
`schoolId` | number
`year` | number
`contractId` | number
`contractStatusId` | number
`compensationType` | string
`baseSalaryCents` | number
`oneTimeBonusCents` | number
`outsideIncomeCents` | number
`deferredCompCents` | number
`guaranteedCompCents` | number
`bonusCompCents` | number
`noncontingentBonusCompCents` | number
`calculatedGuaranteedCompCents` | number
`averageYearlyCompCents` | number
`carStipendCents` | number
`countryClubDuesCents` | number
`talentFee` | number
`numCars` | number
`contingentBonus` | boolean
`bonusHasContingents` | boolean
`countyClubMembershipPaid` | boolean
`isCarProvided` | boolean
`executedOn` | Date
`startOn` | Date
`endOn` | Date
`expiresOn` | Date
`buyoutTerms` | string
`mediaLink` | string
`comment` | string

## Example

```typescript
import type { CompensationCreateRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "schoolId": null,
  "year": null,
  "contractId": null,
  "contractStatusId": null,
  "compensationType": null,
  "baseSalaryCents": null,
  "oneTimeBonusCents": null,
  "outsideIncomeCents": null,
  "deferredCompCents": null,
  "guaranteedCompCents": null,
  "bonusCompCents": null,
  "noncontingentBonusCompCents": null,
  "calculatedGuaranteedCompCents": null,
  "averageYearlyCompCents": null,
  "carStipendCents": null,
  "countryClubDuesCents": null,
  "talentFee": null,
  "numCars": null,
  "contingentBonus": null,
  "bonusHasContingents": null,
  "countyClubMembershipPaid": null,
  "isCarProvided": null,
  "executedOn": null,
  "startOn": null,
  "endOn": null,
  "expiresOn": null,
  "buyoutTerms": null,
  "mediaLink": null,
  "comment": null,
} satisfies CompensationCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


