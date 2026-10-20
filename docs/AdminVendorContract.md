
# AdminVendorContract


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`schoolName` | string
`dealTypeId` | number
`dealTypeName` | string
`vendors` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`startAt` | Date
`endAt` | Date
`verified` | boolean
`updatedAt` | Date
`rawContractId` | number

## Example

```typescript
import type { AdminVendorContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "dealTypeId": null,
  "dealTypeName": null,
  "vendors": null,
  "startAt": null,
  "endAt": null,
  "verified": null,
  "updatedAt": null,
  "rawContractId": null,
} satisfies AdminVendorContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminVendorContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


