
# PublishedContract


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
`pending` | boolean
`contractableType` | string
`contractableId` | number
`rawContractId` | number
`createdAt` | Date
`updatedAt` | Date
`compensationIds` | Array&lt;number&gt;
`compensations` | [Array&lt;PublishedContractAllOfCompensations&gt;](PublishedContractAllOfCompensations.md)

## Example

```typescript
import type { PublishedContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "executedOn": Tue Jan 01 00:00:00 UTC 2019,
  "expiresOn": Tue Jan 01 00:00:00 UTC 2019,
  "startOn": Tue Jan 01 00:00:00 UTC 2019,
  "endOn": Tue Jan 01 00:00:00 UTC 2019,
  "atWill": false,
  "verified": false,
  "pending": false,
  "contractableType": Coach,
  "contractableId": 1,
  "rawContractId": 1,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "compensationIds": null,
  "compensations": null,
} satisfies PublishedContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishedContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


