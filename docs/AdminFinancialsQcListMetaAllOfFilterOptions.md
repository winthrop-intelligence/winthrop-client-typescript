
# AdminFinancialsQcListMetaAllOfFilterOptions


## Properties

Name | Type
------------ | -------------
`conferences` | [Array&lt;IdName&gt;](IdName.md)
`divisions` | [Array&lt;IdName&gt;](IdName.md)
`subdivisions` | [Array&lt;IdName&gt;](IdName.md)
`schools` | [Array&lt;IdName&gt;](IdName.md)
`years` | [Array&lt;AdminFinancialsQcListMetaAllOfFilterOptionsYearsInner&gt;](AdminFinancialsQcListMetaAllOfFilterOptionsYearsInner.md)

## Example

```typescript
import type { AdminFinancialsQcListMetaAllOfFilterOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "conferences": null,
  "divisions": null,
  "subdivisions": null,
  "schools": null,
  "years": null,
} satisfies AdminFinancialsQcListMetaAllOfFilterOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFinancialsQcListMetaAllOfFilterOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


