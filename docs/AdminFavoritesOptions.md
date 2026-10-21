
# AdminFavoritesOptions


## Properties

Name | Type
------------ | -------------
`accounts` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`favoritableTypes` | Array&lt;string&gt;
`items` | [Array&lt;AdminFavoritesOptionsItemsInner&gt;](AdminFavoritesOptionsItemsInner.md)

## Example

```typescript
import type { AdminFavoritesOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "accounts": null,
  "favoritableTypes": null,
  "items": null,
} satisfies AdminFavoritesOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFavoritesOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


