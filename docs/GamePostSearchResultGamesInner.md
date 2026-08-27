
# GamePostSearchResultGamesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`gameDate` | Date
`neutral` | boolean
`inConference` | boolean
`description` | string
`isHome` | boolean
`opponentId` | number
`opponentName` | string

## Example

```typescript
import type { GamePostSearchResultGamesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "gameDate": null,
  "neutral": null,
  "inConference": null,
  "description": null,
  "isHome": null,
  "opponentId": null,
  "opponentName": null,
} satisfies GamePostSearchResultGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResultGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


