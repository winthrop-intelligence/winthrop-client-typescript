
# AdminRankingsEditorData


## Properties

Name | Type
------------ | -------------
`conferenceId` | number
`conferenceName` | string
`year` | string
`schools` | [Array&lt;AdminRankingsEditorSchool&gt;](AdminRankingsEditorSchool.md)

## Example

```typescript
import type { AdminRankingsEditorData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "conferenceId": null,
  "conferenceName": null,
  "year": null,
  "schools": null,
} satisfies AdminRankingsEditorData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRankingsEditorData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


