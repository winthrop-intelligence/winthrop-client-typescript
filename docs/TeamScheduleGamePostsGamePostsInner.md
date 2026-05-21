
# TeamScheduleGamePostsGamePostsInner


## Properties

Name | Type
------------ | -------------
`id` | number
`gamePostId` | number
`displayDate` | string
`gameTypes` | string
`description` | string
`lastRpi` | number
`lastNetRank` | number
`avgRpi` | number
`avgNetRank` | number
`city` | string
`stateName` | string
`createdAt` | string
`active` | boolean
`distance` | number
`canManage` | boolean

## Example

```typescript
import type { TeamScheduleGamePostsGamePostsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "gamePostId": null,
  "displayDate": null,
  "gameTypes": null,
  "description": null,
  "lastRpi": null,
  "lastNetRank": null,
  "avgRpi": null,
  "avgNetRank": null,
  "city": null,
  "stateName": null,
  "createdAt": null,
  "active": null,
  "distance": null,
  "canManage": null,
} satisfies TeamScheduleGamePostsGamePostsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleGamePostsGamePostsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


