
# AdminFinancialStat

A single school/sport/season financial stat row (admin namespace)

## Properties

Name | Type
------------ | -------------
`id` | number
`year` | number
`school` | [IdName](IdName.md)
`sport` | [IdName](IdName.md)
`equivalencies` | number
`athleticAidEquivalency` | number
`exhaustedEligibilityOrMedicalEquivalency` | number
`studentsReceivingAthleticAid` | number
`headCoachPositions` | number
`headCoachFte` | number
`assistantCoachPositions` | number
`assistantCoachFte` | number
`firstTeamParticipants` | number
`secondTeamParticipants` | number
`thirdTeamParticipants` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminFinancialStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "year": null,
  "school": null,
  "sport": null,
  "equivalencies": null,
  "athleticAidEquivalency": null,
  "exhaustedEligibilityOrMedicalEquivalency": null,
  "studentsReceivingAthleticAid": null,
  "headCoachPositions": null,
  "headCoachFte": null,
  "assistantCoachPositions": null,
  "assistantCoachFte": null,
  "firstTeamParticipants": null,
  "secondTeamParticipants": null,
  "thirdTeamParticipants": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminFinancialStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFinancialStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


