
# AdminPlayerStatSeason


## Properties

Name | Type
------------ | -------------
`id` | number
`year` | number
`yearStr` | string
`school` | [AdminPlayerStatSeasonSchool](AdminPlayerStatSeasonSchool.md)
`sport` | [IdName](IdName.md)

## Example

```typescript
import type { AdminPlayerStatSeason } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "year": null,
  "yearStr": null,
  "school": null,
  "sport": null,
} satisfies AdminPlayerStatSeason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerStatSeason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


