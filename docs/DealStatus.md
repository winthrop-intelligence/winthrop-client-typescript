
# DealStatus


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`autoRenew` | boolean
`createdAt` | Date
`updatedAt` | Date
`sourceNote` | string
`note` | string
`dealStatusTypeId` | number
`dealTypeId` | number

## Example

```typescript
import type { DealStatus } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "schoolId": 2,
  "autoRenew": false,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "sourceNote": This is a note,
  "note": This is a note,
  "dealStatusTypeId": 3,
  "dealTypeId": 4,
} satisfies DealStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


