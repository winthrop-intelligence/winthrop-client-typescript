
# NcaaFinancialSourceAggregate


## Properties

Name | Type
------------ | -------------
`rawContractId` | number
`sourceLabel` | string
`gender` | string
`athleticAidEquivalency` | string
`exhaustedEligibilityOrMedicalEquivalency` | string
`equivalenciesAwarded` | string
`studentsReceivingAthleticAid` | number
`headCoachPositions` | number
`headCoachFte` | string
`assistantCoachPositions` | number
`assistantCoachFte` | string
`firstTeamParticipants` | number
`secondTeamParticipants` | number
`thirdTeamParticipants` | number

## Example

```typescript
import type { NcaaFinancialSourceAggregate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "rawContractId": null,
  "sourceLabel": null,
  "gender": null,
  "athleticAidEquivalency": null,
  "exhaustedEligibilityOrMedicalEquivalency": null,
  "equivalenciesAwarded": null,
  "studentsReceivingAthleticAid": null,
  "headCoachPositions": null,
  "headCoachFte": null,
  "assistantCoachPositions": null,
  "assistantCoachFte": null,
  "firstTeamParticipants": null,
  "secondTeamParticipants": null,
  "thirdTeamParticipants": null,
} satisfies NcaaFinancialSourceAggregate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NcaaFinancialSourceAggregate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


