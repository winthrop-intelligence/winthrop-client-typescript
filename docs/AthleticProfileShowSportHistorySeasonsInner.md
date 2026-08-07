
# AthleticProfileShowSportHistorySeasonsInner


## Properties

Name | Type
------------ | -------------
`year` | number
`coachId` | number
`coachName` | string
`coachLastName` | string
`interim` | boolean
`record` | string
`conferenceRecord` | string
`netRank` | number
`rpi` | number
`postseason` | string
`spendCents` | number

## Example

```typescript
import type { AthleticProfileShowSportHistorySeasonsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "coachId": null,
  "coachName": null,
  "coachLastName": null,
  "interim": null,
  "record": null,
  "conferenceRecord": null,
  "netRank": null,
  "rpi": null,
  "postseason": null,
  "spendCents": null,
} satisfies AthleticProfileShowSportHistorySeasonsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportHistorySeasonsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


