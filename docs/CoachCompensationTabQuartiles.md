
# CoachCompensationTabQuartiles


## Properties

Name | Type
------------ | -------------
`title` | string
`positionName` | string
`sportName` | string
`yearStr` | string
`coachTotalCompCents` | number
`rows` | [Array&lt;CoachCompensationTabQuartilesRowsInner&gt;](CoachCompensationTabQuartilesRowsInner.md)

## Example

```typescript
import type { CoachCompensationTabQuartiles } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "positionName": null,
  "sportName": null,
  "yearStr": null,
  "coachTotalCompCents": null,
  "rows": null,
} satisfies CoachCompensationTabQuartiles

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachCompensationTabQuartiles
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


