
# TeamScheduleCoaches


## Properties

Name | Type
------------ | -------------
`performanceYear` | number
`performanceYears` | Array&lt;number&gt;
`sportName` | string
`coaches` | [Array&lt;TeamScheduleCoachesCoachesInner&gt;](TeamScheduleCoachesCoachesInner.md)
`headCoaches` | Array&lt;Array&lt;TeamScheduleCoachesHeadCoachesInnerInner&gt;&gt;
`seasons` | [Array&lt;TeamScheduleCoachesSeasonsInner&gt;](TeamScheduleCoachesSeasonsInner.md)

## Example

```typescript
import type { TeamScheduleCoaches } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "performanceYear": null,
  "performanceYears": null,
  "sportName": null,
  "coaches": null,
  "headCoaches": null,
  "seasons": null,
} satisfies TeamScheduleCoaches

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleCoaches
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


