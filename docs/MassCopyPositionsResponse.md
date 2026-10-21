
# MassCopyPositionsResponse


## Properties

Name | Type
------------ | -------------
`copiedCount` | number
`copiedIds` | Array&lt;number&gt;
`skippedSports` | Array&lt;string&gt;
`formattedNextYear` | string

## Example

```typescript
import type { MassCopyPositionsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "copiedCount": null,
  "copiedIds": null,
  "skippedSports": null,
  "formattedNextYear": null,
} satisfies MassCopyPositionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassCopyPositionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


