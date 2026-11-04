
# CreatePendingContract201Response


## Properties

Name | Type
------------ | -------------
`id` | number
`rawContractId` | number
`filename` | string
`coachId` | number
`pending` | boolean
`executedOn` | Date
`expiresOn` | Date
`contingentChange` | boolean
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`verified` | boolean
`contractableType` | string
`contractableId` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { CreatePendingContract201Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "rawContractId": 1,
  "filename": null,
  "coachId": null,
  "pending": false,
  "executedOn": Tue Jan 01 00:00:00 UTC 2019,
  "expiresOn": Tue Jan 01 00:00:00 UTC 2019,
  "contingentChange": false,
  "startOn": Tue Jan 01 00:00:00 UTC 2019,
  "endOn": Tue Jan 01 00:00:00 UTC 2019,
  "atWill": false,
  "verified": false,
  "contractableType": Coach,
  "contractableId": 1,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies CreatePendingContract201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePendingContract201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


