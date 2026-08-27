
# SportCompensationRankings


## Properties

Name | Type
------------ | -------------
`isFootball` | boolean
`years` | Array&lt;number&gt;
`netYears` | Array&lt;number&gt;
`apYears` | Array&lt;number&gt;
`schools` | [Array&lt;SportCompensationRankingsSchoolsInner&gt;](SportCompensationRankingsSchoolsInner.md)
`conferenceAvgs` | { [key: string]: number | null; }
`netConferenceAvgs` | { [key: string]: number | null; }
`apConferenceAvgs` | { [key: string]: number | null; }

## Example

```typescript
import type { SportCompensationRankings } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "isFootball": null,
  "years": null,
  "netYears": null,
  "apYears": null,
  "schools": null,
  "conferenceAvgs": null,
  "netConferenceAvgs": null,
  "apConferenceAvgs": null,
} satisfies SportCompensationRankings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SportCompensationRankings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


