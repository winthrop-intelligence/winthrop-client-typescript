
# AdminCompensationChangeHistoryDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`event` | string
`year` | number
`userName` | string
`changeNote` | string
`createdAt` | Date
`changes` | [Array&lt;AdminCompensationChangeHistoryDataInnerChangesInner&gt;](AdminCompensationChangeHistoryDataInnerChangesInner.md)

## Example

```typescript
import type { AdminCompensationChangeHistoryDataInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "event": null,
  "year": null,
  "userName": null,
  "changeNote": null,
  "createdAt": null,
  "changes": null,
} satisfies AdminCompensationChangeHistoryDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensationChangeHistoryDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


