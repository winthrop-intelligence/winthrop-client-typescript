
# PendingGameContractWriteExpectedGamesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`gameDate` | Date
`seasonYear` | number
`seasonYearTbd` | number
`neutral` | boolean
`gameContractId` | number

## Example

```typescript
import type { PendingGameContractWriteExpectedGamesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "homeSchoolId": null,
  "awaySchoolId": null,
  "sportId": null,
  "gameDate": null,
  "seasonYear": null,
  "seasonYearTbd": null,
  "neutral": null,
  "gameContractId": null,
} satisfies PendingGameContractWriteExpectedGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingGameContractWriteExpectedGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


