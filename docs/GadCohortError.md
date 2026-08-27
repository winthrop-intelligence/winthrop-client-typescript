
# GadCohortError

Structured error returned when a cohort input is unsupported or required filters are missing.

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
import type { GadCohortError } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errorType": null,
  "message": null,
  "validValues": null,
  "suggestedFix": null,
  "receivedArgs": null,
  "retryable": null,
} satisfies GadCohortError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadCohortError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


