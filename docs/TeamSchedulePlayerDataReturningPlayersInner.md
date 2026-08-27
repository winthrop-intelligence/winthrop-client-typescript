
# TeamSchedulePlayerDataReturningPlayersInner


## Properties

Name | Type
------------ | -------------
`name` | string
`position` | string
`height` | string
`weight` | number
`playerClass` | string
`pts` | number
`reb` | number
`ast` | number
`mpg` | number

## Example

```typescript
import type { TeamSchedulePlayerDataReturningPlayersInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "position": null,
  "height": null,
  "weight": null,
  "playerClass": null,
  "pts": null,
  "reb": null,
  "ast": null,
  "mpg": null,
} satisfies TeamSchedulePlayerDataReturningPlayersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamSchedulePlayerDataReturningPlayersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


