
# DepartmentAdministratorsScorecardPoint


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`name` | string
`isSubject` | boolean
`colors` | string
`spendCents` | number
`cupPlace` | number

## Example

```typescript
import type { DepartmentAdministratorsScorecardPoint } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "name": null,
  "isSubject": null,
  "colors": null,
  "spendCents": null,
  "cupPlace": null,
} satisfies DepartmentAdministratorsScorecardPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsScorecardPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


