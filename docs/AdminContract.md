
# AdminContract


## Properties

Name | Type
------------ | -------------
`id` | number
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`contingentChange` | boolean
`executedOn` | Date
`expiresOn` | Date
`verified` | boolean
`driveId` | string
`createdAt` | Date
`updatedAt` | Date
`coachId` | number
`coach` | [AdminContractCoach](AdminContractCoach.md)
`rawContract` | [AdminContractRawContract](AdminContractRawContract.md)

## Example

```typescript
import type { AdminContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "startOn": null,
  "endOn": null,
  "atWill": null,
  "contingentChange": null,
  "executedOn": null,
  "expiresOn": null,
  "verified": null,
  "driveId": null,
  "createdAt": null,
  "updatedAt": null,
  "coachId": null,
  "coach": null,
  "rawContract": null,
} satisfies AdminContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


