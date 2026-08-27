
# GameContractSeriesEntry


## Properties

Name | Type
------------ | -------------
`id` | number
`sportName` | string
`homeSchoolId` | number
`homeSchoolName` | string
`awaySchoolId` | number
`awaySchoolName` | string
`compCents` | number
`compTbd` | boolean
`variable` | boolean
`cancelFeeCents` | number
`cancelled` | boolean
`seasonYear` | number
`gameDate` | Date
`gameDateTbd` | string

## Example

```typescript
import type { GameContractSeriesEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "sportName": null,
  "homeSchoolId": null,
  "homeSchoolName": null,
  "awaySchoolId": null,
  "awaySchoolName": null,
  "compCents": null,
  "compTbd": null,
  "variable": null,
  "cancelFeeCents": null,
  "cancelled": null,
  "seasonYear": null,
  "gameDate": null,
  "gameDateTbd": null,
} satisfies GameContractSeriesEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameContractSeriesEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


