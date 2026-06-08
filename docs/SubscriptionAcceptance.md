
# SubscriptionAcceptance


## Properties

Name | Type
------------ | -------------
`id` | number
`slug` | string
`accountName` | string
`subscriptionTypeName` | string
`annualPrice` | string
`amountCents` | number
`startAt` | Date
`endAt` | Date
`contractTerm` | number
`contractTermOptions` | [Array&lt;ContractTermOption&gt;](ContractTermOption.md)
`standardLengthContract` | boolean
`totalPrice` | string
`contractAccepted` | boolean
`rawContractAttached` | boolean
`accepted` | boolean
`errors` | Array&lt;string&gt;

## Example

```typescript
import type { SubscriptionAcceptance } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 335,
  "slug": 3534255,
  "accountName": Big Ten,
  "subscriptionTypeName": Win12,
  "annualPrice": $15,995,
  "amountCents": 1599500,
  "startAt": Tue Jun 25 00:00:00 UTC 2024,
  "endAt": Fri Jun 25 00:00:00 UTC 2027,
  "contractTerm": 36,
  "contractTermOptions": null,
  "standardLengthContract": true,
  "totalPrice": $47,984,
  "contractAccepted": false,
  "rawContractAttached": true,
  "accepted": true,
  "errors": null,
} satisfies SubscriptionAcceptance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionAcceptance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


