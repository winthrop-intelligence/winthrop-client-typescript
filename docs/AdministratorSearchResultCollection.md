
# AdministratorSearchResultCollection


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Administrator&gt;](Administrator.md)
`meta` | [Meta](Meta.md)
`compStats` | [CompStats](CompStats.md)

## Example

```typescript
import type { AdministratorSearchResultCollection } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "meta": null,
  "compStats": null,
} satisfies AdministratorSearchResultCollection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdministratorSearchResultCollection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


