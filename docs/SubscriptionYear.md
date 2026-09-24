
# SubscriptionYear


## Properties

Name | Type
------------ | -------------
`id` | number
`subscriptionId` | number
`yearNumber` | number
`serviceStart` | Date
`serviceEnd` | Date
`amountCents` | number
`dueDate` | Date
`backfilled` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SubscriptionYear } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "subscriptionId": 335,
  "yearNumber": 1,
  "serviceStart": Wed Jul 01 00:00:00 UTC 2026,
  "serviceEnd": Wed Jun 30 00:00:00 UTC 2027,
  "amountCents": 1599500,
  "dueDate": Sat Aug 01 00:00:00 UTC 2026,
  "backfilled": false,
  "createdAt": 2026-07-01T00:00Z,
  "updatedAt": 2026-07-01T00:00Z,
} satisfies SubscriptionYear

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionYear
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


