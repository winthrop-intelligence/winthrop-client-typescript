
# AdminCompensationListMeta


## Properties

Name | Type
------------ | -------------
`totalEntries` | number
`contractStatusOptions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)
`coachContractOptions` | [Array&lt;AdminCompensationListMetaCoachContractOptionsInner&gt;](AdminCompensationListMetaCoachContractOptionsInner.md)

## Example

```typescript
import type { AdminCompensationListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalEntries": null,
  "contractStatusOptions": null,
  "coachContractOptions": null,
} satisfies AdminCompensationListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensationListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


