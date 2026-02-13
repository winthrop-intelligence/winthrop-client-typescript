
# GadSearchResult


## Properties

Name | Type
------------ | -------------
`gameContractId` | number
`sportId` | number
`sportName` | string
`sportGenderCodeClass` | string
`homeSchoolId` | number
`homeSchoolName` | string
`homeSchoolShortName` | string
`homeSchoolLogoUrl` | string
`awaySchoolId` | number
`awaySchoolName` | string
`awaySchoolShortName` | string
`awaySchoolLogoUrl` | string
`gameType` | string
`compCents` | number
`compTbd` | boolean
`variable` | boolean
`cancelFeeCents` | number
`cancelled` | boolean
`seasonYear` | number
`gameDate` | Date
`gameDateTbd` | boolean
`rawContractId` | number
`belongsToSeries` | boolean
`canManage` | boolean

## Example

```typescript
import type { GadSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "gameContractId": null,
  "sportId": null,
  "sportName": null,
  "sportGenderCodeClass": null,
  "homeSchoolId": null,
  "homeSchoolName": null,
  "homeSchoolShortName": null,
  "homeSchoolLogoUrl": null,
  "awaySchoolId": null,
  "awaySchoolName": null,
  "awaySchoolShortName": null,
  "awaySchoolLogoUrl": null,
  "gameType": null,
  "compCents": null,
  "compTbd": null,
  "variable": null,
  "cancelFeeCents": null,
  "cancelled": null,
  "seasonYear": null,
  "gameDate": null,
  "gameDateTbd": null,
  "rawContractId": null,
  "belongsToSeries": null,
  "canManage": null,
} satisfies GadSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GadSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


