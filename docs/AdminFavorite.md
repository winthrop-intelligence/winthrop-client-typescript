
# AdminFavorite


## Properties

Name | Type
------------ | -------------
`id` | number
`favoritableType` | string
`favoritableId` | number
`favoritesCategoryId` | number
`accountId` | number
`accountName` | string
`accountSubscriptionType` | string
`userId` | number
`userName` | string
`userEmail` | string
`userState` | string
`categoryName` | string
`favoritableName` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminFavorite } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "favoritableType": null,
  "favoritableId": null,
  "favoritesCategoryId": null,
  "accountId": null,
  "accountName": null,
  "accountSubscriptionType": null,
  "userId": null,
  "userName": null,
  "userEmail": null,
  "userState": null,
  "categoryName": null,
  "favoritableName": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminFavorite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFavorite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


