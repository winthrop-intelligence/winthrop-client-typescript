
# GameContractSeriesResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`sportName` | string
`homeSchoolId` | number
`homeSchoolName` | string
`awaySchoolId` | number
`awaySchoolName` | string
`gameType` | string
`seasonYear` | number
`cancelFeeCents` | number
`hasRawContract` | boolean
`rawContractUrl` | string
`data` | [Array&lt;GameContractSeriesEntry&gt;](GameContractSeriesEntry.md)

## Example

```typescript
import type { GameContractSeriesResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "sportName": null,
  "homeSchoolId": null,
  "homeSchoolName": null,
  "awaySchoolId": null,
  "awaySchoolName": null,
  "gameType": null,
  "seasonYear": null,
  "cancelFeeCents": null,
  "hasRawContract": null,
  "rawContractUrl": null,
  "data": null,
} satisfies GameContractSeriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameContractSeriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


