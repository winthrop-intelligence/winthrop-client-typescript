
# GamePostSearchResultPostsInner


## Properties

Name | Type
------------ | -------------
`id` | number
`date` | Date
`gameTypes` | Array&lt;string&gt;
`status` | string
`startDate` | Date
`endDate` | Date
`description` | string
`gameTypesDisplay` | string
`expiresOn` | Date
`createdAt` | Date
`canManage` | boolean
`createdBy` | [GamePostSearchResultPostsInnerCreatedBy](GamePostSearchResultPostsInnerCreatedBy.md)

## Example

```typescript
import type { GamePostSearchResultPostsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "date": null,
  "gameTypes": null,
  "status": null,
  "startDate": null,
  "endDate": null,
  "description": null,
  "gameTypesDisplay": null,
  "expiresOn": null,
  "createdAt": null,
  "canManage": null,
  "createdBy": null,
} satisfies GamePostSearchResultPostsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResultPostsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


