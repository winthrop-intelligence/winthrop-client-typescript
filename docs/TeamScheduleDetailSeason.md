
# TeamScheduleDetailSeason


## Properties

Name | Type
------------ | -------------
`wins` | number
`losses` | number
`recordStr` | string
`rpi` | number
`avgRpi` | number

## Example

```typescript
import type { TeamScheduleDetailSeason } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "wins": null,
  "losses": null,
  "recordStr": null,
  "rpi": null,
  "avgRpi": null,
} satisfies TeamScheduleDetailSeason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleDetailSeason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


