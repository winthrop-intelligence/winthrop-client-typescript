
# EadaInstitutionResult


## Properties

Name | Type
------------ | -------------
`found` | boolean
`year` | number
`matchStatus` | string
`matchReason` | string
`unitid` | number
`metrics` | [Array&lt;EadaNormalizedMetric&gt;](EadaNormalizedMetric.md)
`sourcePayload` | object

## Example

```typescript
import type { EadaInstitutionResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "found": null,
  "year": null,
  "matchStatus": null,
  "matchReason": null,
  "unitid": null,
  "metrics": null,
  "sourcePayload": null,
} satisfies EadaInstitutionResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaInstitutionResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


