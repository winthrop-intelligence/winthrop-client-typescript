
# ContractHistoryEntryUser

Who made the change; null when none was recorded. A user deleted since keeps the id with a null name.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string

## Example

```typescript
import type { ContractHistoryEntryUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
} satisfies ContractHistoryEntryUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractHistoryEntryUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


