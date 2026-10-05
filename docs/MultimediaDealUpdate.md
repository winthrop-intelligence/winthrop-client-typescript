
# MultimediaDealUpdate


## Properties

Name | Type
------------ | -------------
`grf` | [DealUpdateAmount](DealUpdateAmount.md)
`bha` | [DealUpdateAmount](DealUpdateAmount.md)
`signingBonus` | [DealUpdateAmount](DealUpdateAmount.md)
`additionalRev` | [DealUpdateAmount](DealUpdateAmount.md)
`contingentBonus` | boolean
`revSharePercent` | [MultimediaDealUpdateRevSharePercent](MultimediaDealUpdateRevSharePercent.md)

## Example

```typescript
import type { MultimediaDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "grf": null,
  "bha": null,
  "signingBonus": null,
  "additionalRev": null,
  "contingentBonus": null,
  "revSharePercent": null,
} satisfies MultimediaDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultimediaDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


