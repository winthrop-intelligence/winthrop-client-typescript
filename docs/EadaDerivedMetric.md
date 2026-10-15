
# EadaDerivedMetric


## Properties

Name | Type
------------ | -------------
`canonicalMetricId` | string
`label` | string
`description` | string
`formula` | string
`sourceService` | string

## Example

```typescript
import type { EadaDerivedMetric } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "canonicalMetricId": null,
  "label": null,
  "description": null,
  "formula": null,
  "sourceService": null,
} satisfies EadaDerivedMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EadaDerivedMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


