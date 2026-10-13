
# EadaSportResultItem


## Properties

Name | Type
------------ | -------------
`sportCode` | string
`sportName` | string
`matchStatus` | string
`mappingStatus` | string
`metrics` | [Array&lt;EadaNormalizedMetric&gt;](EadaNormalizedMetric.md)
`sourcePayload` | object

## Example

```typescript
import type { EadaSportResultItem } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportCode": null,
  "sportName": null,
  "matchStatus": null,
  "mappingStatus": null,
  "metrics": null,
  "sourcePayload": null,
} satisfies EadaSportResultItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaSportResultItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


