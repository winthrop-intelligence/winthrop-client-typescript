
# ConferenceDirectorsCupResponse


## Properties

Name | Type
------------ | -------------
`years` | Array&lt;number&gt;
`schools` | [Array&lt;DirectorsCupSchool&gt;](DirectorsCupSchool.md)

## Example

```typescript
import type { ConferenceDirectorsCupResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "years": null,
  "schools": null,
} satisfies ConferenceDirectorsCupResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConferenceDirectorsCupResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


