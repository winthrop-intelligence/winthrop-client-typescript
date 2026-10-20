
# AdminFavoriteDetail


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
`categoryOptions` | [Array&lt;AdminFavoriteCategoryOption&gt;](AdminFavoriteCategoryOption.md)

## Example

```typescript
import type { AdminFavoriteDetail } from '@winthrop-intelligence/winthrop-client-typescript'

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
  "categoryOptions": null,
} satisfies AdminFavoriteDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFavoriteDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


