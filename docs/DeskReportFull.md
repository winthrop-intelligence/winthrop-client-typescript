
# DeskReportFull


## Properties

Name | Type
------------ | -------------
`uuid` | string
`title` | string
`category` | string
`reportType` | string
`summary` | string
`headlineStats` | [Array&lt;DeskHeadlineStat&gt;](DeskHeadlineStat.md)
`cover` | [DeskReportSummaryCover](DeskReportSummaryCover.md)
`publishedAt` | Date
`updatedAt` | Date
`pageCount` | number
`artifactKinds` | Array&lt;string&gt;
`artifacts` | [Array&lt;DeskReportArtifact&gt;](DeskReportArtifact.md)
`rerunCadence` | string
`pushExample` | string
`unread` | boolean
`requestContext` | [DeskRequestContext](DeskRequestContext.md)
`bodyHtml` | string
`sections` | [Array&lt;DeskReportFullAllOfSections&gt;](DeskReportFullAllOfSections.md)
`versionNumber` | number
`firstOpen` | boolean

## Example

```typescript
import type { DeskReportFull } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "title": null,
  "category": null,
  "reportType": null,
  "summary": null,
  "headlineStats": null,
  "cover": null,
  "publishedAt": null,
  "updatedAt": null,
  "pageCount": null,
  "artifactKinds": null,
  "artifacts": null,
  "rerunCadence": null,
  "pushExample": null,
  "unread": null,
  "requestContext": null,
  "bodyHtml": null,
  "sections": null,
  "versionNumber": null,
  "firstOpen": null,
} satisfies DeskReportFull

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskReportFull
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


