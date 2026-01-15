
# Contract


## Properties

Name | Type
------------ | -------------
`id` | number
`executedOn` | Date
`expiresOn` | Date
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`verified` | boolean
`contractableType` | string
`contractableId` | number
`rawContractId` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Contract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "executedOn": Mon Dec 31 18:00:00 CST 2018,
  "expiresOn": Mon Dec 31 18:00:00 CST 2018,
  "startOn": Mon Dec 31 18:00:00 CST 2018,
  "endOn": Mon Dec 31 18:00:00 CST 2018,
  "atWill": false,
  "verified": false,
  "contractableType": Coach,
  "contractableId": 1,
  "rawContractId": 1,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies Contract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Contract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


