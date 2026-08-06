
# DepartmentAdministratorsAdSeat


## Properties

Name | Type
------------ | -------------
`coachId` | number
`friendlyId` | string
`name` | string
`lastName` | string
`title` | string
`departments` | Array&lt;string&gt;
`isAd` | boolean
`compCents` | number
`compBasis` | string
`compEstimated` | boolean
`tenureYears` | number
`compYear` | number

## Example

```typescript
import type { DepartmentAdministratorsAdSeat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "friendlyId": null,
  "name": null,
  "lastName": null,
  "title": null,
  "departments": null,
  "isAd": null,
  "compCents": null,
  "compBasis": null,
  "compEstimated": null,
  "tenureYears": null,
  "compYear": null,
} satisfies DepartmentAdministratorsAdSeat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsAdSeat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


