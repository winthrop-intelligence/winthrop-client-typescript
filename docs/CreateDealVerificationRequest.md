
# CreateDealVerificationRequest


## Properties

Name | Type
------------ | -------------
`dealVerification` | [DealVerificationInput](DealVerificationInput.md)
`changeNote` | string

## Example

```typescript
import type { CreateDealVerificationRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "dealVerification": null,
  "changeNote": null,
} satisfies CreateDealVerificationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDealVerificationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


