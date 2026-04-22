
# TeamScheduleCoachesSeasonsInner


## Properties

Name | Type
------------ | -------------
`year` | number
`wins` | number
`losses` | number
`ties` | number
`rpi` | number
`recordStr` | string
`conferenceRecord` | string
`postseason` | string
`homeRecord` | string
`homeWinPercent` | number
`sosRanking` | number
`offensiveEfficiency` | number
`defensiveEfficiency` | number

## Example

```typescript
import type { TeamScheduleCoachesSeasonsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "wins": null,
  "losses": null,
  "ties": null,
  "rpi": null,
  "recordStr": null,
  "conferenceRecord": null,
  "postseason": null,
  "homeRecord": null,
  "homeWinPercent": null,
  "sosRanking": null,
  "offensiveEfficiency": null,
  "defensiveEfficiency": null,
} satisfies TeamScheduleCoachesSeasonsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleCoachesSeasonsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


