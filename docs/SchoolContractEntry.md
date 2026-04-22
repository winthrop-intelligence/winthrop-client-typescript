
# SchoolContractEntry


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchoolName` | string
`homeSchoolId` | number
`awaySchoolName` | string
`awaySchoolId` | number
`gameType` | string
`compCents` | number
`compTbd` | boolean
`variable` | boolean
`seasonYear` | number
`gameDate` | Date
`gameDateTbd` | string
`cancelFeeCents` | number
`cancelled` | boolean
`hasRawContract` | boolean
`belongsToSeries` | boolean

## Example

```typescript
import type { SchoolContractEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "homeSchoolName": null,
  "homeSchoolId": null,
  "awaySchoolName": null,
  "awaySchoolId": null,
  "gameType": null,
  "compCents": null,
  "compTbd": null,
  "variable": null,
  "seasonYear": null,
  "gameDate": null,
  "gameDateTbd": null,
  "cancelFeeCents": null,
  "cancelled": null,
  "hasRawContract": null,
  "belongsToSeries": null,
} satisfies SchoolContractEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolContractEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


