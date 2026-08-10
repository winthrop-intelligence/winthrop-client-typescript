
# AdminContractList


## Properties

Name | Type
------------ | -------------
`meta` | [AdminCoachContractsQcListMeta](AdminCoachContractsQcListMeta.md)
`data` | [Array&lt;AdminContract&gt;](AdminContract.md)

## Example

```typescript
import type { AdminContractList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminContractList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContractList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


