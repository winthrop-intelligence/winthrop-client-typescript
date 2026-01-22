
# Position


## Properties

Name | Type
------------ | -------------
`id` | number
`seasonId` | number
`coachId` | number
`startOn` | Date
`endOn` | Date
`partialSeason` | boolean
`compensationId` | number
`coachApr` | number
`title` | string
`nameDisplay` | string
`departing` | boolean
`departingSetAt` | Date
`creationReason` | string
`creationReasonUpdatedAt` | Date
`coach` | [Coach](Coach.md)
`sport` | [Sport](Sport.md)
`school` | [School](School.md)
`articleLink` | string
`articleTitle` | string
`articleDescription` | string
`articleSiteName` | string
`articlePublishTime` | string
`articleImageUrl` | string
`positionTypes` | [Array&lt;PositionType&gt;](PositionType.md)

## Example

```typescript
import type { Position } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "seasonId": 2,
  "coachId": 3,
  "startOn": Mon Dec 31 18:00:00 CST 2018,
  "endOn": Mon Dec 31 18:00:00 CST 2018,
  "partialSeason": false,
  "compensationId": 4,
  "coachApr": 5,
  "title": This is a title,
  "nameDisplay": This is a display name,
  "departing": false,
  "departingSetAt": 2019-01-01T00:00Z,
  "creationReason": null,
  "creationReasonUpdatedAt": 2019-01-01T00:00Z,
  "coach": null,
  "sport": null,
  "school": null,
  "articleLink": https://google.com,
  "articleTitle": This is the title,
  "articleDescription": This is the description for this article,
  "articleSiteName": Test Site,
  "articlePublishTime": 2019-01-01T00:00:00.000Z,
  "articleImageUrl": https://google.com,
  "positionTypes": null,
} satisfies Position

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Position
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


