
# PublishPendingDealRequestDeal


## Properties

Name | Type
------------ | -------------
`vendorId` | number
`startOn` | Date
`endOn` | Date
`startAt` | Date
`endAt` | Date
`autorenew` | boolean
`text` | string
`vendorIds` | Array&lt;number&gt;
`schoolId` | number

## Example

```typescript
import type { PublishPendingDealRequestDeal } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "vendorId": null,
  "startOn": Tue Jul 01 00:00:00 UTC 2025,
  "endOn": Sun Jun 30 00:00:00 UTC 2030,
  "startAt": null,
  "endAt": null,
  "autorenew": null,
  "text": null,
  "vendorIds": null,
  "schoolId": null,
} satisfies PublishPendingDealRequestDeal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingDealRequestDeal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


