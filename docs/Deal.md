
# Deal


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`vendorId` | number
`startAt` | Date
`endAt` | Date
`signed` | Date
`createdAt` | Date
`updatedAt` | Date
`text` | string
`autorenew` | boolean
`dealTypeId` | number
`archived` | boolean
`verified` | boolean

## Example

```typescript
import type { Deal } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "vendorId": null,
  "startAt": 2019-01-01T00:00Z,
  "endAt": 2019-01-01T00:00Z,
  "signed": 2019-01-01T00:00Z,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "text": null,
  "autorenew": null,
  "dealTypeId": null,
  "archived": null,
  "verified": null,
} satisfies Deal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Deal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


