
# PublishPendingGameContractRequest


## Properties

Name | Type
------------ | -------------
`rawContractId` | number
`expectedSha256` | string
`occurrences` | [Array&lt;PublishPendingGameContractRequestOccurrencesInner&gt;](PublishPendingGameContractRequestOccurrencesInner.md)

## Example

```typescript
import type { PublishPendingGameContractRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "rawContractId": null,
  "expectedSha256": null,
  "occurrences": null,
} satisfies PublishPendingGameContractRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingGameContractRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


