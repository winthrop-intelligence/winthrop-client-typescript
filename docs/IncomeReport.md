
# IncomeReport


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`rawContractId` | number
`year` | number
`createdAt` | Date
`updatedAt` | Date
`notes` | string
`contractStatusId` | number

## Example

```typescript
import type { IncomeReport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "coachId": 2,
  "rawContractId": 3,
  "year": 2020,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "notes": This is a note,
  "contractStatusId": 5,
} satisfies IncomeReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


