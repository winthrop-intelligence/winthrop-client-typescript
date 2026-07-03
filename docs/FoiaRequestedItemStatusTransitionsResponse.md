
# FoiaRequestedItemStatusTransitionsResponse


## Properties

Name | Type
------------ | -------------
`meta` | [FoiaRequestedItemStatusTransitionsMeta](FoiaRequestedItemStatusTransitionsMeta.md)
`data` | [Array&lt;FoiaRequestedItemStatusTransitionRow&gt;](FoiaRequestedItemStatusTransitionRow.md)

## Example

```typescript
import type { FoiaRequestedItemStatusTransitionsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies FoiaRequestedItemStatusTransitionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequestedItemStatusTransitionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


