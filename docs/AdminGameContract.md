
# AdminGameContract


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`compCents` | number
`cancelFeeCents` | number
`rawContractId` | number
`seasonYear` | number
`seasonYearTbd` | number
`attendance` | number
`homeSchoolName` | string
`awaySchoolName` | string
`sportName` | string
`gameDate` | string
`gameDateTbd` | string
`signedOn` | string
`gameType` | string
`offSiteLocation` | string
`rawContractFilename` | string
`rawContractUrl` | string
`createdAt` | string
`updatedAt` | string
`compTbd` | boolean
`variable` | boolean
`cancelled` | boolean
`verified` | boolean
`belongsToSeries` | boolean
`hasRawContract` | boolean

## Example

```typescript
import type { AdminGameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "homeSchoolId": null,
  "awaySchoolId": null,
  "sportId": null,
  "compCents": null,
  "cancelFeeCents": null,
  "rawContractId": null,
  "seasonYear": null,
  "seasonYearTbd": null,
  "attendance": null,
  "homeSchoolName": null,
  "awaySchoolName": null,
  "sportName": null,
  "gameDate": null,
  "gameDateTbd": null,
  "signedOn": null,
  "gameType": null,
  "offSiteLocation": null,
  "rawContractFilename": null,
  "rawContractUrl": null,
  "createdAt": null,
  "updatedAt": null,
  "compTbd": null,
  "variable": null,
  "cancelled": null,
  "verified": null,
  "belongsToSeries": null,
  "hasRawContract": null,
} satisfies AdminGameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


