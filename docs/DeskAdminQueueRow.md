
# DeskAdminQueueRow

One 06.1 queue row (frontend DeskAdminQueueRow, structured facts only)

## Properties

Name | Type
------------ | -------------
`uuid` | string
`kind` | string
`status` | string
`title` | string
`account` | [DeskAdminAccount](DeskAdminAccount.md)
`requestedBy` | string
`askBody` | string
`askReceivedAt` | Date
`dueAt` | Date
`clockPaused` | boolean
`hasHtml` | boolean
`artifactKinds` | Array&lt;string&gt;
`publishedAt` | Date
`updatedAt` | Date
`hiddenAt` | Date
`hiddenReason` | string
`openCount` | number
`activityAt` | Date

## Example

```typescript
import type { DeskAdminQueueRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "kind": null,
  "status": null,
  "title": null,
  "account": null,
  "requestedBy": null,
  "askBody": null,
  "askReceivedAt": null,
  "dueAt": null,
  "clockPaused": null,
  "hasHtml": null,
  "artifactKinds": null,
  "publishedAt": null,
  "updatedAt": null,
  "hiddenAt": null,
  "hiddenReason": null,
  "openCount": null,
  "activityAt": null,
} satisfies DeskAdminQueueRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminQueueRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


