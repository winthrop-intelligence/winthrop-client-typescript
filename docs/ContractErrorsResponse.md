
# ContractErrorsResponse


## Properties

Name | Type
------------ | -------------
`linkedCompensationIds` | Array&lt;number&gt;
`linkedPositionIds` | Array&lt;number&gt;
`linkedVerificationIds` | Array&lt;number&gt;
`linkedEarnedIncentiveIds` | Array&lt;number&gt;
`errors` | { [key: string]: Array&lt;string&gt;; }

## Example

```typescript
import type { ContractErrorsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "linkedCompensationIds": null,
  "linkedPositionIds": null,
  "linkedVerificationIds": null,
  "linkedEarnedIncentiveIds": null,
  "errors": null,
} satisfies ContractErrorsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractErrorsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


