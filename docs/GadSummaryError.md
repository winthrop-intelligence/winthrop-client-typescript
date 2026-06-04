
# GadSummaryError

Structured error returned when include_school_summary inputs are invalid (missing sport or school).

## Properties

Name | Type
------------ | -------------
`errorType` | string
`message` | string
`validValues` | Array&lt;string&gt;
`suggestedFix` | string
`receivedArgs` | { [key: string]: any; }
`retryable` | boolean

## Example

```typescript
import type { GadSummaryError } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errorType": null,
  "message": null,
  "validValues": null,
  "suggestedFix": null,
  "receivedArgs": null,
  "retryable": null,
} satisfies GadSummaryError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadSummaryError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


