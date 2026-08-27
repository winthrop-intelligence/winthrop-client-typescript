
# AthleticProfileShowPersonnelInner


## Properties

Name | Type
------------ | -------------
`coachId` | number
`firstName` | string
`lastName` | string
`positionName` | string
`departing` | boolean
`avatarUrl` | string
`salaryCents` | number
`salaryDisplay` | string

## Example

```typescript
import type { AthleticProfileShowPersonnelInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "firstName": null,
  "lastName": null,
  "positionName": null,
  "departing": null,
  "avatarUrl": null,
  "salaryCents": null,
  "salaryDisplay": null,
} satisfies AthleticProfileShowPersonnelInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowPersonnelInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


