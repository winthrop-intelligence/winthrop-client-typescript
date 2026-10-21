
# CreateSportRequestSport


## Properties

Name | Type
------------ | -------------
`name` | string
`nameAka` | string
`nameDisplay` | string
`genderCode` | string
`timeOfYearId` | number
`emerging` | boolean
`meetSport` | boolean
`visible` | boolean
`ncaaId` | string

## Example

```typescript
import type { CreateSportRequestSport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "nameAka": null,
  "nameDisplay": null,
  "genderCode": null,
  "timeOfYearId": null,
  "emerging": null,
  "meetSport": null,
  "visible": null,
  "ncaaId": null,
} satisfies CreateSportRequestSport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSportRequestSport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


