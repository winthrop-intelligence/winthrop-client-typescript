
# PublishPendingGameContractRequestOccurrencesInner


## Properties

Name | Type
------------ | -------------
`occurrenceId` | string
`gameIds` | Array&lt;number&gt;
`expectedGames` | [Array&lt;PendingGameContractWriteExpectedGamesInner&gt;](PendingGameContractWriteExpectedGamesInner.md)
`gameContract` | [PendingGameContractWriteGameContract](PendingGameContractWriteGameContract.md)
`skip` | [PendingGameContractSkipSkip](PendingGameContractSkipSkip.md)

## Example

```typescript
import type { PublishPendingGameContractRequestOccurrencesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "occurrenceId": null,
  "gameIds": null,
  "expectedGames": null,
  "gameContract": null,
  "skip": null,
} satisfies PublishPendingGameContractRequestOccurrencesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingGameContractRequestOccurrencesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


