
# RawContractBuyoutInputs


## Properties

Name | Type
------------ | -------------
`id` | number
`buyoutInputs` | [BuyoutInputs](BuyoutInputs.md)
`buyoutInputsUpdatedAt` | Date
`buyoutInputsStale` | boolean
`buyoutInputsStaleReasons` | Array&lt;string&gt;

## Example

```typescript
import type { RawContractBuyoutInputs } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "buyoutInputs": null,
  "buyoutInputsUpdatedAt": null,
  "buyoutInputsStale": null,
  "buyoutInputsStaleReasons": null,
} satisfies RawContractBuyoutInputs

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawContractBuyoutInputs
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


