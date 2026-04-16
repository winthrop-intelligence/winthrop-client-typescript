
# AccountSubscription


## Properties

Name | Type
------------ | -------------
`id` | number
`subscriptionTypeName` | string
`startAt` | Date
`endAt` | Date
`contractTerm` | number
`amountCents` | number
`totalPrice` | string
`hasIntercollegiateAccess` | boolean
`active` | boolean
`autorenew` | boolean
`rawContractId` | number
`rawContractFilename` | string
`rawContractAttached` | boolean

## Example

```typescript
import type { AccountSubscription } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subscriptionTypeName": null,
  "startAt": null,
  "endAt": null,
  "contractTerm": null,
  "amountCents": null,
  "totalPrice": null,
  "hasIntercollegiateAccess": null,
  "active": null,
  "autorenew": null,
  "rawContractId": null,
  "rawContractFilename": null,
  "rawContractAttached": null,
} satisfies AccountSubscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountSubscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


