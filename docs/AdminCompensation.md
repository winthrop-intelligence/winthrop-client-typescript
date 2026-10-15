
# AdminCompensation


## Properties

Name | Type
------------ | -------------
`id` | number
`year` | number
`schoolId` | number
`coachId` | number
`compensationType` | string
`baseSalaryDollars` | string
`oneTimeBonusDollars` | string
`talentFeeDollars` | string
`outsideIncomeDollars` | string
`deferredCompDollars` | string
`buyoutTerms` | string
`isCarProvided` | boolean
`countyClubMembershipPaid` | boolean
`comment` | string
`contractStatusId` | number
`contractId` | number
`mediaLink` | string
`contingentBonus` | boolean
`persisted` | boolean
`calculatedGuaranteedCompDollars` | string
`salaryStr` | string
`hasRawContract` | boolean
`formattedBuyoutTerms` | string
`rawContractId` | number
`school` | [AdminCoachCurrentSchool](AdminCoachCurrentSchool.md)
`contractStatus` | [AdminCoachHometownState](AdminCoachHometownState.md)

## Example

```typescript
import type { AdminCompensation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "year": null,
  "schoolId": null,
  "coachId": null,
  "compensationType": null,
  "baseSalaryDollars": null,
  "oneTimeBonusDollars": null,
  "talentFeeDollars": null,
  "outsideIncomeDollars": null,
  "deferredCompDollars": null,
  "buyoutTerms": null,
  "isCarProvided": null,
  "countyClubMembershipPaid": null,
  "comment": null,
  "contractStatusId": null,
  "contractId": null,
  "mediaLink": null,
  "contingentBonus": null,
  "persisted": null,
  "calculatedGuaranteedCompDollars": null,
  "salaryStr": null,
  "hasRawContract": null,
  "formattedBuyoutTerms": null,
  "rawContractId": null,
  "school": null,
  "contractStatus": null,
} satisfies AdminCompensation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


