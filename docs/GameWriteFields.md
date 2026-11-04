
# GameWriteFields


## Properties

Name | Type
------------ | -------------
`homeSchoolId` | number
`homeSchoolScore` | number
`awaySchoolId` | number
`awaySchoolScore` | number
`overtime` | number
`sportId` | number
`description` | string
`gameDate` | Date
`seasonYearTbd` | number
`gameContractId` | number
`city` | string
`stateId` | number
`neutral` | boolean

## Example

```typescript
import type { GameWriteFields } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "homeSchoolId": null,
  "homeSchoolScore": null,
  "awaySchoolId": null,
  "awaySchoolScore": null,
  "overtime": null,
  "sportId": null,
  "description": null,
  "gameDate": null,
  "seasonYearTbd": null,
  "gameContractId": null,
  "city": null,
  "stateId": null,
  "neutral": null,
} satisfies GameWriteFields

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameWriteFields
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


