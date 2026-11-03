
# SwapContractRawContractsRequest


## Properties

Name | Type
------------ | -------------
`contractIds` | Array&lt;number&gt;
`expectedRawContractIds` | { [key: string]: number; }
`changeNote` | string

## Example

```typescript
import type { SwapContractRawContractsRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "contractIds": null,
  "expectedRawContractIds": {266199=414148, 266258=414207},
  "changeNote": null,
} satisfies SwapContractRawContractsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapContractRawContractsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


