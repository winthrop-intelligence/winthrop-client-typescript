
# GameContractHistory


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`gameId` | number
`currentGameContractId` | number
`contracts` | [Array&lt;GameContractHistoryEntry&gt;](GameContractHistoryEntry.md)

## Example

```typescript
import type { GameContractHistory } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "gameId": null,
  "currentGameContractId": null,
  "contracts": null,
} satisfies GameContractHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameContractHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


