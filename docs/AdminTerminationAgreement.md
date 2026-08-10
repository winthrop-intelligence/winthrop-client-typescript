
# AdminTerminationAgreement


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`rawContractId` | number
`createdAt` | Date
`updatedAt` | Date
`coach` | [AdminTerminationAgreementCoach](AdminTerminationAgreementCoach.md)
`rawContract` | [AdminTerminationAgreementRawContract](AdminTerminationAgreementRawContract.md)

## Example

```typescript
import type { AdminTerminationAgreement } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "rawContractId": null,
  "createdAt": null,
  "updatedAt": null,
  "coach": null,
  "rawContract": null,
} satisfies AdminTerminationAgreement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminTerminationAgreement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


