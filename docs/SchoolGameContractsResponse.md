
# SchoolGameContractsResponse


## Properties

Name | Type
------------ | -------------
`school` | [SchoolGameContractsResponseSchool](SchoolGameContractsResponseSchool.md)
`sports` | [Array&lt;SchoolSportSection&gt;](SchoolSportSection.md)

## Example

```typescript
import type { SchoolGameContractsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "sports": null,
} satisfies SchoolGameContractsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolGameContractsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


