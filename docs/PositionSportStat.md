
# PositionSportStat


## Properties

Name | Type
------------ | -------------
`sportId` | number
`sportName` | string
`genderCode` | string
`highPositionNum` | number
`lowPositionNum` | number
`medianPositionNum` | number
`count` | number

## Example

```typescript
import type { PositionSportStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportId": null,
  "sportName": null,
  "genderCode": null,
  "highPositionNum": null,
  "lowPositionNum": null,
  "medianPositionNum": null,
  "count": null,
} satisfies PositionSportStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PositionSportStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


