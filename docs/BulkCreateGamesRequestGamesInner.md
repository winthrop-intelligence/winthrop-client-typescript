
# BulkCreateGamesRequestGamesInner


## Properties

Name | Type
------------ | -------------
`homeSchoolId` | number
`awaySchoolId` | number
`sportId` | number
`gameDate` | Date
`neutral` | boolean

## Example

```typescript
import type { BulkCreateGamesRequestGamesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "homeSchoolId": null,
  "awaySchoolId": null,
  "sportId": null,
  "gameDate": null,
  "neutral": null,
} satisfies BulkCreateGamesRequestGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateGamesRequestGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


