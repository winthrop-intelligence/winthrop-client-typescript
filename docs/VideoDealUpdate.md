
# VideoDealUpdate

Video Mgmt deals (WINAD-10685).

## Properties

Name | Type
------------ | -------------
`sports` | [Array&lt;ApparelDealUpdateSportsInner&gt;](ApparelDealUpdateSportsInner.md)
`annualHostFee` | [DealUpdateAmount](DealUpdateAmount.md)

## Example

```typescript
import type { VideoDealUpdate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sports": null,
  "annualHostFee": null,
} satisfies VideoDealUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoDealUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


