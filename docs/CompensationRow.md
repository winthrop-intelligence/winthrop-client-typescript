
# CompensationRow

A single head coach or AD compensation record

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`schoolName` | string
`coachId` | number
`coachName` | string
`totalComp` | number
`baseSalary` | number
`talentFee` | number
`outsideIncome` | number
`contingentBonus` | boolean
`carProvided` | boolean
`countryClub` | boolean
`buyoutTerms` | string
`contractEnd` | string

## Example

```typescript
import type { CompensationRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "coachId": null,
  "coachName": null,
  "totalComp": null,
  "baseSalary": null,
  "talentFee": null,
  "outsideIncome": null,
  "contingentBonus": null,
  "carProvided": null,
  "countryClub": null,
  "buyoutTerms": null,
  "contractEnd": null,
} satisfies CompensationRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


