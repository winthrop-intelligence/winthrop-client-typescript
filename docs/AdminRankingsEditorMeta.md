
# AdminRankingsEditorMeta


## Properties

Name | Type
------------ | -------------
`years` | Array&lt;number&gt;
`conferences` | [Array&lt;AdminRankingsEditorConference&gt;](AdminRankingsEditorConference.md)

## Example

```typescript
import type { AdminRankingsEditorMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "years": null,
  "conferences": null,
} satisfies AdminRankingsEditorMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRankingsEditorMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


