
# DeskAdminReportUpdate


## Properties

Name | Type
------------ | -------------
`title` | string
`category` | string
`reportType` | string
`summary` | string
`coverTreatment` | string
`coverKicker` | string
`coverNumeral` | string
`pageCount` | number
`pushExample` | string
`rerunCadence` | string
`headlineStats` | [Array&lt;DeskHeadlineStat&gt;](DeskHeadlineStat.md)
`composition` | [DeskComposition](DeskComposition.md)
`draftBodyHtml` | string
`accountId` | number

## Example

```typescript
import type { DeskAdminReportUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "category": null,
  "reportType": null,
  "summary": null,
  "coverTreatment": null,
  "coverKicker": null,
  "coverNumeral": null,
  "pageCount": null,
  "pushExample": null,
  "rerunCadence": null,
  "headlineStats": null,
  "composition": null,
  "draftBodyHtml": null,
  "accountId": null,
} satisfies DeskAdminReportUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminReportUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


