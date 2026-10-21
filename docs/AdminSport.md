
# AdminSport


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameAka` | string
`nameDisplay` | string
`genderCode` | string
`timeOfYearId` | number
`timeOfYear` | [AdminSportTimeOfYear](AdminSportTimeOfYear.md)
`emerging` | boolean
`meetSport` | boolean
`visible` | boolean
`ncaaId` | string
`positionsCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminSport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameAka": null,
  "nameDisplay": null,
  "genderCode": null,
  "timeOfYearId": null,
  "timeOfYear": null,
  "emerging": null,
  "meetSport": null,
  "visible": null,
  "ncaaId": null,
  "positionsCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminSport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


