
# AthleticProfileShowGamesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`opponentName` | string
`opponentId` | number
`isAway` | boolean
`gameDate` | string
`seasonYearTbd` | string
`city` | string
`stateName` | string
`rpi` | string
`compensationCents` | number
`gameContractId` | number

## Example

```typescript
import type { AthleticProfileShowGamesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "opponentName": null,
  "opponentId": null,
  "isAway": null,
  "gameDate": null,
  "seasonYearTbd": null,
  "city": null,
  "stateName": null,
  "rpi": null,
  "compensationCents": null,
  "gameContractId": null,
} satisfies AthleticProfileShowGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


