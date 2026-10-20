
# AdminDealsOptionsDealTypesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string
`dealDetailFields` | [Array&lt;AdminDealsOptionsDealTypesInnerDealDetailFieldsInner&gt;](AdminDealsOptionsDealTypesInnerDealDetailFieldsInner.md)

## Example

```typescript
import type { AdminDealsOptionsDealTypesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameDisplay": null,
  "dealDetailFields": null,
} satisfies AdminDealsOptionsDealTypesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminDealsOptionsDealTypesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


