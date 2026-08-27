
# AvailableGameContract

Row returned by /games/available_contracts — a lightweight projection of GameContract for picking from the Edit Game sheet\'s Contract dropdown. 

## Properties

Name | Type
------------ | -------------
`id` | number
`sportName` | string
`homeSchoolName` | string
`awaySchoolName` | string
`gameDate` | Date
`gameDateTbd` | string
`gameType` | string
`compCents` | number

## Example

```typescript
import type { AvailableGameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1234,
  "sportName": MBB,
  "homeSchoolName": Duke,
  "awaySchoolName": UNC,
  "gameDate": Sun Nov 22 00:00:00 UTC 2026,
  "gameDateTbd": TBD 2026,
  "gameType": Guarantee,
  "compCents": 12500000,
} satisfies AvailableGameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AvailableGameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


