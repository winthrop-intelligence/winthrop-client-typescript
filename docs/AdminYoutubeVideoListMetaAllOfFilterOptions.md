
# AdminYoutubeVideoListMetaAllOfFilterOptions


## Properties

Name | Type
------------ | -------------
`states` | [Array&lt;AdminYoutubeVideoListMetaAllOfFilterOptionsStatesInner&gt;](AdminYoutubeVideoListMetaAllOfFilterOptionsStatesInner.md)
`sports` | [Array&lt;IdName&gt;](IdName.md)
`conferences` | [Array&lt;IdName&gt;](IdName.md)

## Example

```typescript
import type { AdminYoutubeVideoListMetaAllOfFilterOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "states": null,
  "sports": null,
  "conferences": null,
} satisfies AdminYoutubeVideoListMetaAllOfFilterOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminYoutubeVideoListMetaAllOfFilterOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


