
# PublishPendingContractRequestContractTerms

Optional. Replaces the structured terms on the contract\'s RawContract in the same transaction (WINAD-10633). Omitted, null or an empty string leaves them unchanged. Errors are keyed contract_terms, contract_terms.schema, contract_terms.source.run_id, and so on. Accepted from service (client-credentials) tokens like the rest of publish; the audit version then records no person.

## Properties

Name | Type
------------ | -------------
`schema` | string
`source` | [ContractTermsSource](ContractTermsSource.md)

## Example

```typescript
import type { PublishPendingContractRequestContractTerms } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schema": null,
  "source": null,
} satisfies PublishPendingContractRequestContractTerms

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishPendingContractRequestContractTerms
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


