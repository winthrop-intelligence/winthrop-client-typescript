
# AdminVendorDetail


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`dealTypeId` | number
`dealsCount` | number
`createdAt` | Date
`updatedAt` | Date
`dealType` | [AdminCoachCurrentSport](AdminCoachCurrentSport.md)

## Example

```typescript
import type { AdminVendorDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "dealTypeId": null,
  "dealsCount": null,
  "createdAt": null,
  "updatedAt": null,
  "dealType": null,
} satisfies AdminVendorDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminVendorDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


