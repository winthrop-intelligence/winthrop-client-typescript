
# AdminDealDealDetail

Dynamic - real columns depend on `type` (one of the 13 DealDetail STI subclasses); always includes id, type, sport_ids

## Properties

Name | Type
------------ | -------------
`id` | number
`type` | string
`sportIds` | Array&lt;number&gt;

## Example

```typescript
import type { AdminDealDealDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "sportIds": null,
} satisfies AdminDealDealDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminDealDealDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


