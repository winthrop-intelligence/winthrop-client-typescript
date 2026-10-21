
# CreateAdminDealRequestDeal


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`dealTypeId` | number
`startAt` | Date
`endAt` | Date
`autorenew` | boolean
`archived` | boolean
`text` | string
`vendorIds` | Array&lt;number&gt;
`rawContractAttributes` | [CreateAdminDealRequestDealRawContractAttributes](CreateAdminDealRequestDealRawContractAttributes.md)

## Example

```typescript
import type { CreateAdminDealRequestDeal } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "dealTypeId": null,
  "startAt": null,
  "endAt": null,
  "autorenew": null,
  "archived": null,
  "text": null,
  "vendorIds": null,
  "rawContractAttributes": null,
} satisfies CreateAdminDealRequestDeal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminDealRequestDeal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


