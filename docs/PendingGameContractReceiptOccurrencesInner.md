
# PendingGameContractReceiptOccurrencesInner


## Properties

Name | Type
------------ | -------------
`occurrenceId` | string
`disposition` | string
`gameIds` | Array&lt;number&gt;
`gameContractId` | number
`reason` | string

## Example

```typescript
import type { PendingGameContractReceiptOccurrencesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "occurrenceId": null,
  "disposition": null,
  "gameIds": null,
  "gameContractId": null,
  "reason": null,
} satisfies PendingGameContractReceiptOccurrencesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingGameContractReceiptOccurrencesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


