
# DeskRequest

A pending ask (frontend DeskRequest)

## Properties

Name | Type
------------ | -------------
`uuid` | string
`body` | string
`title` | string
`category` | string
`status` | string
`requesterName` | string
`requestedByViewer` | boolean
`requestedAt` | Date
`deliversLabel` | string
`sourceReportUuid` | string
`ctaKey` | string
`adminNote` | string

## Example

```typescript
import type { DeskRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "body": null,
  "title": null,
  "category": null,
  "status": null,
  "requesterName": null,
  "requestedByViewer": null,
  "requestedAt": null,
  "deliversLabel": null,
  "sourceReportUuid": null,
  "ctaKey": null,
  "adminNote": null,
} satisfies DeskRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


