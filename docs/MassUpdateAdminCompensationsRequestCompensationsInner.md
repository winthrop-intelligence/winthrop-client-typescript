
# MassUpdateAdminCompensationsRequestCompensationsInner


## Properties

Name | Type
------------ | -------------
`id` | number
`year` | number
`schoolId` | number
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
`compensationType` | string
`mediaLink` | string
`contingentBonus` | boolean

## Example

```typescript
import type { MassUpdateAdminCompensationsRequestCompensationsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "year": null,
  "schoolId": null,
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
  "compensationType": null,
  "mediaLink": null,
  "contingentBonus": null,
} satisfies MassUpdateAdminCompensationsRequestCompensationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassUpdateAdminCompensationsRequestCompensationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


