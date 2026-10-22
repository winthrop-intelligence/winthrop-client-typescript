
# AdminScraperJobsList


## Properties

Name | Type
------------ | -------------
`meta` | [Meta](Meta.md)
`data` | [Array&lt;AdminScraperRunningJob&gt;](AdminScraperRunningJob.md)

## Example

```typescript
import type { AdminScraperJobsList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminScraperJobsList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminScraperJobsList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


