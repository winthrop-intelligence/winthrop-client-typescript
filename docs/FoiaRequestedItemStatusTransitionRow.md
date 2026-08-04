
# FoiaRequestedItemStatusTransitionRow

A single status transition event. One requested item can appear in multiple rows when its status changed more than once in the window.

## Properties

Name | Type
------------ | -------------
`requestedItemId` | number
`foiaRequestId` | number
`foiaLabelId` | number
`foiaLabelName` | string
`schoolId` | number
`schoolName` | string
`requestableType` | string
`requestableId` | number
`fromStatus` | string
`toStatus` | string
`statusChangedAt` | Date

## Example

```typescript
import type { FoiaRequestedItemStatusTransitionRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requestedItemId": null,
  "foiaRequestId": null,
  "foiaLabelId": null,
  "foiaLabelName": null,
  "schoolId": null,
  "schoolName": null,
  "requestableType": null,
  "requestableId": null,
  "fromStatus": null,
  "toStatus": null,
  "statusChangedAt": null,
} satisfies FoiaRequestedItemStatusTransitionRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestedItemStatusTransitionRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


