
# AdminYoutubeVideo


## Properties

Name | Type
------------ | -------------
`id` | number
`youtubeId` | string
`title` | string
`description` | string
`username` | string
`publishedAt` | Date
`state` | string
`createdAt` | Date
`updatedAt` | Date
`link` | string
`thumbnailUrl` | string
`coach` | [AdminYoutubeVideoCoach](AdminYoutubeVideoCoach.md)
`school` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`sport` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)

## Example

```typescript
import type { AdminYoutubeVideo } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "youtubeId": null,
  "title": null,
  "description": null,
  "username": null,
  "publishedAt": null,
  "state": null,
  "createdAt": null,
  "updatedAt": null,
  "link": null,
  "thumbnailUrl": null,
  "coach": null,
  "school": null,
  "sport": null,
} satisfies AdminYoutubeVideo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminYoutubeVideo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


