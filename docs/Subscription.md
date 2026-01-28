
# Subscription


## Properties

Name | Type
------------ | -------------
`id` | number
`accountableId` | number
`creatorId` | number
`startAt` | Date
`endAt` | Date
`amountCents` | number
`createdAt` | Date
`updatedAt` | Date
`subscriptionTypeId` | number
`autorenew` | boolean
`activityCacheId` | number
`oldEmailDomain` | string
`accountId` | number
`contractTerm` | number
`rawContractId` | number
`slug` | string
`contractAccepted` | boolean
`active` | boolean
`contractAcceptedIpAddress` | string
`renewal` | boolean
`renewing` | boolean
`invoicing` | boolean
`notes` | string
`sendRenewal` | boolean
`standardAgreement` | boolean
`activeUsersCount` | number
`hasIntercollegiateAccess` | boolean

## Example

```typescript
import type { Subscription } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 335,
  "accountableId": 1,
  "creatorId": 2,
  "startAt": Tue Jan 01 00:00:00 UTC 2019,
  "endAt": Wed Jan 01 00:00:00 UTC 2020,
  "amountCents": 10000,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "subscriptionTypeId": 4,
  "autorenew": true,
  "activityCacheId": 5,
  "oldEmailDomain": xyz.xyz,
  "accountId": 10,
  "contractTerm": 12,
  "rawContractId": 123,
  "slug": 3534255,
  "contractAccepted": false,
  "active": false,
  "contractAcceptedIpAddress": 233.34.24.28,
  "renewal": false,
  "renewing": false,
  "invoicing": true,
  "notes": This is a note,
  "sendRenewal": true,
  "standardAgreement": true,
  "activeUsersCount": 5,
  "hasIntercollegiateAccess": true,
} satisfies Subscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Subscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


