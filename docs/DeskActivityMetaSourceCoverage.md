
# DeskActivityMetaSourceCoverage


## Properties

Name | Type
------------ | -------------
`reasons` | Array&lt;string&gt;
`availableFrom` | Date
`retainedFrom` | Date
`retentionDays` | number
`sourceEvents` | number
`unknownEvents` | number
`legacyFileEvents` | number
`missingVersionEvents` | number

## Example

```typescript
import type { DeskActivityMetaSourceCoverage } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reasons": null,
  "availableFrom": null,
  "retainedFrom": null,
  "retentionDays": null,
  "sourceEvents": null,
  "unknownEvents": null,
  "legacyFileEvents": null,
  "missingVersionEvents": null,
} satisfies DeskActivityMetaSourceCoverage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskActivityMetaSourceCoverage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


