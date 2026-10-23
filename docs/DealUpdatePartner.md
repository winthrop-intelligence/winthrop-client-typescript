
# DealUpdatePartner

Who the money goes to. One of the three partners; null or a blank (empty or whitespace-only) string clears it. Any other value is refused with 422 `deal_detail.partner`.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { DealUpdatePartner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
} satisfies DealUpdatePartner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealUpdatePartner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


