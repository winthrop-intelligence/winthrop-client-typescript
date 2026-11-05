
# PublishPendingContractCompensation


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`year` | number
`compensationType` | string
`baseSalary` | [PublishPendingContractCompensationBaseSalary](PublishPendingContractCompensationBaseSalary.md)
`oneTimeBonus` | [PublishPendingContractCompensationOneTimeBonus](PublishPendingContractCompensationOneTimeBonus.md)
`outsideIncome` | [PublishPendingContractCompensationOneTimeBonus](PublishPendingContractCompensationOneTimeBonus.md)
`deferredCompensation` | [PublishPendingContractCompensationOneTimeBonus](PublishPendingContractCompensationOneTimeBonus.md)
`personalServices` | [PublishPendingContractCompensationOneTimeBonus](PublishPendingContractCompensationOneTimeBonus.md)
`contingentBonus` | boolean
`countryClubMembership` | boolean
`carProvided` | boolean
`comment` | string
`buyoutAmount` | string
`changeNote` | string

## Example

```typescript
import type { PublishPendingContractCompensation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "year": null,
  "compensationType": null,
  "baseSalary": null,
  "oneTimeBonus": null,
  "outsideIncome": null,
  "deferredCompensation": null,
  "personalServices": null,
  "contingentBonus": null,
  "countryClubMembership": null,
  "carProvided": null,
  "comment": null,
  "buyoutAmount": null,
  "changeNote": null,
} satisfies PublishPendingContractCompensation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingContractCompensation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


