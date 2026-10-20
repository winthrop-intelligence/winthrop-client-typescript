
# UpdateAdminDealStatusRequestDealStatus


## Properties

Name | Type
------------ | -------------
`dealStatusTypeId` | number
`dealSourceId` | number
`sourceNote` | string
`note` | string
`autoRenew` | boolean

## Example

```typescript
import type { UpdateAdminDealStatusRequestDealStatus } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "dealStatusTypeId": null,
  "dealSourceId": null,
  "sourceNote": null,
  "note": null,
  "autoRenew": null,
} satisfies UpdateAdminDealStatusRequestDealStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAdminDealStatusRequestDealStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


