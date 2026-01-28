
# NewsFeed


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`body` | string
`url` | string
`sourceId` | number
`sourceType` | string
`links` | [LinkCollection](LinkCollection.md)
`tagsList` | [LinkCollection1](LinkCollection1.md)

## Example

```typescript
import type { NewsFeed } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "title": News Feed Title,
  "body": this is a new article about,
  "url": https://google.com/article,
  "sourceId": 1,
  "sourceType": ExternalScrapper,
  "links": null,
  "tagsList": null,
} satisfies NewsFeed

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewsFeed
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


