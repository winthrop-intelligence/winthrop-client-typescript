
# AdminGamesListMeta


## Properties

Name | Type
------------ | -------------
`school` | [AdminGameSchoolRef](AdminGameSchoolRef.md)
`sports` | [Array&lt;AdminGameSportRef&gt;](AdminGameSportRef.md)
`states` | [Array&lt;AdminGameStateRef&gt;](AdminGameStateRef.md)

## Example

```typescript
import type { AdminGamesListMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "sports": null,
  "states": null,
} satisfies AdminGamesListMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGamesListMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


