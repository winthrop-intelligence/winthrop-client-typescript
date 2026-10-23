
# AdminCoachHistoryDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`itemId` | number
`event` | string
`seasonYear` | string
`createdAt` | Date
`actor` | [GadSchoolSummarySport](GadSchoolSummarySport.md)
`changeNote` | string
`changesUnreadable` | boolean
`changes` | [Array&lt;AdminCoachHistoryDataInnerChangesInner&gt;](AdminCoachHistoryDataInnerChangesInner.md)

## Example

```typescript
import type { AdminCoachHistoryDataInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "event": null,
  "seasonYear": null,
  "createdAt": null,
  "actor": null,
  "changeNote": null,
  "changesUnreadable": null,
  "changes": null,
} satisfies AdminCoachHistoryDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoachHistoryDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


