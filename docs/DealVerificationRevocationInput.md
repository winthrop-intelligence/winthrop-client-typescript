
# DealVerificationRevocationInput


## Properties

Name | Type
------------ | -------------
`reason` | string
`approvalQuote` | string
`changeNote` | string

## Example

```typescript
import type { DealVerificationRevocationInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reason": null,
  "approvalQuote": null,
  "changeNote": null,
} satisfies DealVerificationRevocationInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealVerificationRevocationInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


