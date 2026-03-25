
# CoachRecordTab


## Properties

Name | Type
------------ | -------------
`leaderAd` | boolean
`showCoachApr` | boolean
`positions` | [Array&lt;RecordPositionEntry&gt;](RecordPositionEntry.md)
`conferencePositions` | [Array&lt;ConferencePositionEntry&gt;](ConferencePositionEntry.md)
`performanceChart` | [PerformanceChartData](PerformanceChartData.md)

## Example

```typescript
import type { CoachRecordTab } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "leaderAd": null,
  "showCoachApr": null,
  "positions": null,
  "conferencePositions": null,
  "performanceChart": null,
} satisfies CoachRecordTab

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachRecordTab
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


