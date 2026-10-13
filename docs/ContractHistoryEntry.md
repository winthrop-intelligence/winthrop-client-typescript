
# ContractHistoryEntry


## Properties

Name | Type
------------ | -------------
`itemType` | string
`itemId` | number
`event` | string
`changes` | [{ [key: string]: ContractHistoryEntryChangesValue; }](ContractHistoryEntryChangesValue.md)
`user` | [ContractHistoryEntryUser](ContractHistoryEntryUser.md)
`oauthApplication` | [ContractHistoryEntryOauthApplication](ContractHistoryEntryOauthApplication.md)
`createdAt` | Date
`changeNote` | string

## Example

```typescript
import type { ContractHistoryEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "itemType": null,
  "itemId": null,
  "event": null,
  "changes": {"end_on":{"old":"2028-06-30","new":"2029-06-30"}},
  "user": null,
  "oauthApplication": null,
  "createdAt": null,
  "changeNote": null,
} satisfies ContractHistoryEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractHistoryEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


