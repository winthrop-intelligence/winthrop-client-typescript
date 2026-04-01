
# GameContract


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`gameDate` | Date
`gameDateTbd` | string
`compCents` | number
`variable` | boolean
`cancelFeeCents` | number
`signedOn` | Date
`rawContractId` | number
`createdAt` | Date
`updatedAt` | Date
`compTbd` | boolean
`tbd` | boolean
`seasonYearTbd` | number
`cancelled` | boolean
`seasonYear` | number
`gameType` | string
`offSiteLocation` | string
`verified` | boolean

## Example

```typescript
import type { GameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "homeSchoolId": null,
  "awaySchoolId": null,
  "sportId": null,
  "gameDate": 2019-01-01T00:00Z,
  "gameDateTbd": null,
  "compCents": null,
  "variable": null,
  "cancelFeeCents": null,
  "signedOn": 2019-01-01T00:00Z,
  "rawContractId": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "compTbd": null,
  "tbd": null,
  "seasonYearTbd": null,
  "cancelled": null,
  "seasonYear": null,
  "gameType": null,
  "offSiteLocation": null,
  "verified": null,
} satisfies GameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


