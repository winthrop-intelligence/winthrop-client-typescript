
# DeskAdminReport

ReportAdmin (tmp/desk/TICKETS.md D-15) — the update screen and compose reopen payload

## Properties

Name | Type
------------ | -------------
`uuid` | string
`account` | [DeskAdminAccount](DeskAdminAccount.md)
`status` | string
`adminStatus` | string
`hiddenReason` | string
`hiddenAt` | Date
`title` | string
`category` | string
`reportType` | string
`summary` | string
`headlineStats` | [Array&lt;DeskHeadlineStat&gt;](DeskHeadlineStat.md)
`cover` | [DeskAdminReportCover](DeskAdminReportCover.md)
`pageCount` | number
`pushExample` | string
`rerunCadence` | string
`publishedAt` | Date
`updatedAt` | Date
`bodyHtml` | string
`draftBodyHtml` | string
`hasHtml` | boolean
`versionNumber` | number
`artifactKinds` | Array&lt;string&gt;
`artifacts` | [Array&lt;DeskAdminArtifact&gt;](DeskAdminArtifact.md)
`versions` | [Array&lt;DeskAdminVersion&gt;](DeskAdminVersion.md)
`request` | [DeskAdminReportRequest](DeskAdminReportRequest.md)
`turnaroundLabel` | string

## Example

```typescript
import type { DeskAdminReport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "account": null,
  "status": null,
  "adminStatus": null,
  "hiddenReason": null,
  "hiddenAt": null,
  "title": null,
  "category": null,
  "reportType": null,
  "summary": null,
  "headlineStats": null,
  "cover": null,
  "pageCount": null,
  "pushExample": null,
  "rerunCadence": null,
  "publishedAt": null,
  "updatedAt": null,
  "bodyHtml": null,
  "draftBodyHtml": null,
  "hasHtml": null,
  "versionNumber": null,
  "artifactKinds": null,
  "artifacts": null,
  "versions": null,
  "request": null,
  "turnaroundLabel": null,
} satisfies DeskAdminReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


