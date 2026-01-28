
# CoachCompensation


## Properties

Name | Type
------------ | -------------
`coachId` | number
`estimated` | boolean
`salary` | number
`year` | number
`coliSalary` | number

## Example

```typescript
import type { CoachCompensation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": 1,
  "estimated": false,
  "salary": 3.25E+7,
  "year": 2025,
  "coliSalary": 2.99E+7,
} satisfies CoachCompensation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachCompensation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


