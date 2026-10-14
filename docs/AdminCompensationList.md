
# AdminCompensationList


## Properties

Name | Type
------------ | -------------
`meta` | [AdminCompensationListMeta](AdminCompensationListMeta.md)
`data` | [Array&lt;AdminCompensation&gt;](AdminCompensation.md)

## Example

```typescript
import type { AdminCompensationList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminCompensationList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensationList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


