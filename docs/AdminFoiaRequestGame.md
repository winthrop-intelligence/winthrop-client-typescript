
# AdminFoiaRequestGame


## Properties

Name | Type
------------ | -------------
`id` | number
`homeSchool` | string
`awaySchool` | string
`sport` | string
`description` | string
`gameDate` | Date
`seasonYearTbd` | number
`gameContract` | string
`city` | string
`state` | string
`neutral` | boolean
`attached` | boolean
`requestedItemId` | number

## Example

```typescript
import type { AdminFoiaRequestGame } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "homeSchool": null,
  "awaySchool": null,
  "sport": null,
  "description": null,
  "gameDate": null,
  "seasonYearTbd": null,
  "gameContract": null,
  "city": null,
  "state": null,
  "neutral": null,
  "attached": null,
  "requestedItemId": null,
} satisfies AdminFoiaRequestGame

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestGame
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


