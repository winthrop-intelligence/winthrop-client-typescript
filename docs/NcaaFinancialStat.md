
# NcaaFinancialStat


## Properties

Name | Type
------------ | -------------
`sportId` | number
`sportName` | string
`genderCode` | string
`sourceSportName` | string
`rawContractId` | number
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
import type { NcaaFinancialStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportId": null,
  "sportName": null,
  "genderCode": null,
  "sourceSportName": null,
  "rawContractId": null,
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
} satisfies NcaaFinancialStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NcaaFinancialStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


