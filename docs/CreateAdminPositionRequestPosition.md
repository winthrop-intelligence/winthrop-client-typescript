
# CreateAdminPositionRequestPosition


## Properties

Name | Type
------------ | -------------
`image` | Blob
`executeValidation` | boolean
`seasonId` | number
`coachId` | number
`title` | string
`positionTypeIds` | Array&lt;number&gt;
`creationReason` | string
`departing` | boolean
`articleLink` | string
`articleTitle` | string
`articleDescription` | string
`articleSiteName` | string
`articlePublishTime` | string
`articleImageUrl` | string

## Example

```typescript
import type { CreateAdminPositionRequestPosition } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "image": null,
  "executeValidation": null,
  "seasonId": null,
  "coachId": null,
  "title": null,
  "positionTypeIds": null,
  "creationReason": null,
  "departing": null,
  "articleLink": null,
  "articleTitle": null,
  "articleDescription": null,
  "articleSiteName": null,
  "articlePublishTime": null,
  "articleImageUrl": null,
} satisfies CreateAdminPositionRequestPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminPositionRequestPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


