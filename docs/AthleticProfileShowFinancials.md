
# AthleticProfileShowFinancials


## Properties

Name | Type
------------ | -------------
`years` | Array&lt;number&gt;
`revenues` | [Array&lt;AthleticProfileShowFinancialsRevenuesInner&gt;](AthleticProfileShowFinancialsRevenuesInner.md)
`expenses` | [Array&lt;AthleticProfileShowFinancialsRevenuesInner&gt;](AthleticProfileShowFinancialsRevenuesInner.md)
`chartRevenues` | Array&lt;number&gt;
`chartExpenses` | Array&lt;number&gt;

## Example

```typescript
import type { AthleticProfileShowFinancials } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "years": null,
  "revenues": null,
  "expenses": null,
  "chartRevenues": null,
  "chartExpenses": null,
} satisfies AthleticProfileShowFinancials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowFinancials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


