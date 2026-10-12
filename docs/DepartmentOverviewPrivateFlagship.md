
# DepartmentOverviewPrivateFlagship

The programme a private department\'s Overview banner leads with (WINAD-10391): the highest-paid head-coach seat whose season carries a record, by the DepartmentCoaches seat order. Null when no seat has a W–L.

## Properties

Name | Type
------------ | -------------
`sportKey` | string
`sportName` | string
`coachName` | string
`seasonYear` | number
`wins` | number
`losses` | number
`postseason` | string

## Example

```typescript
import type { DepartmentOverviewPrivateFlagship } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportKey": null,
  "sportName": null,
  "coachName": null,
  "seasonYear": null,
  "wins": null,
  "losses": null,
  "postseason": null,
} satisfies DepartmentOverviewPrivateFlagship

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewPrivateFlagship
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


