
# AdminNotesListMetaFilterOptions


## Properties

Name | Type
------------ | -------------
`accounts` | [Array&lt;IdName&gt;](IdName.md)
`notableTypes` | Array&lt;string&gt;
`notableItems` | [Array&lt;AdminNotesListMetaFilterOptionsNotableItemsInner&gt;](AdminNotesListMetaFilterOptionsNotableItemsInner.md)

## Example

```typescript
import type { AdminNotesListMetaFilterOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "accounts": null,
  "notableTypes": null,
  "notableItems": null,
} satisfies AdminNotesListMetaFilterOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminNotesListMetaFilterOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


