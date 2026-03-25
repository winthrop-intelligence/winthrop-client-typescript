
# GadContractDetail


## Properties

Name | Type
------------ | -------------
`id` | number
`sportId` | number
`sportName` | string
`homeSchoolId` | number
`homeSchoolName` | string
`homeSchoolShortName` | string
`awaySchoolId` | number
`awaySchoolName` | string
`awaySchoolShortName` | string
`gameType` | string
`compCents` | number
`compTbd` | boolean
`variable` | boolean
`cancelFeeCents` | number
`cancelled` | boolean
`seasonYear` | number
`gameDate` | Date
`gameDateTbd` | string
`signedOn` | Date
`offSiteLocation` | string
`rawContractId` | number
`hasRawContract` | boolean
`rawContractUrl` | string
`belongsToSeries` | boolean
`verified` | boolean

## Example

```typescript
import type { GadContractDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "sportId": null,
  "sportName": null,
  "homeSchoolId": null,
  "homeSchoolName": null,
  "homeSchoolShortName": null,
  "awaySchoolId": null,
  "awaySchoolName": null,
  "awaySchoolShortName": null,
  "gameType": null,
  "compCents": null,
  "compTbd": null,
  "variable": null,
  "cancelFeeCents": null,
  "cancelled": null,
  "seasonYear": null,
  "gameDate": null,
  "gameDateTbd": null,
  "signedOn": null,
  "offSiteLocation": null,
  "rawContractId": null,
  "hasRawContract": null,
  "rawContractUrl": null,
  "belongsToSeries": null,
  "verified": null,
} satisfies GadContractDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadContractDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


