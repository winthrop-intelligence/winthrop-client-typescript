
# PerformanceChartData


## Properties

Name | Type
------------ | -------------
`seasons` | Array&lt;string&gt;
`records` | [Array&lt;PerformanceChartRecord&gt;](PerformanceChartRecord.md)
`coaches` | [Array&lt;PerformanceChartCoach&gt;](PerformanceChartCoach.md)

## Example

```typescript
import type { PerformanceChartData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasons": null,
  "records": null,
  "coaches": null,
} satisfies PerformanceChartData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PerformanceChartData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


