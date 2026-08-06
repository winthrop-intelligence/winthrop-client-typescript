
# DepartmentAdministratorStaffRow


## Properties

Name | Type
------------ | -------------
`coachId` | number
`friendlyId` | string
`name` | string
`title` | string
`departments` | Array&lt;string&gt;
`isAd` | boolean
`compCents` | number
`compBasis` | string
`compEstimated` | boolean

## Example

```typescript
import type { DepartmentAdministratorStaffRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "friendlyId": null,
  "name": null,
  "title": null,
  "departments": null,
  "isAd": null,
  "compCents": null,
  "compBasis": null,
  "compEstimated": null,
} satisfies DepartmentAdministratorStaffRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorStaffRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


