
# SchoolSportSeason


## Properties

Name | Type
------------ | -------------
`year` | number
`wins` | number
`losses` | number
`rpi` | number
`sos` | number

## Example

```typescript
import type { SchoolSportSeason } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "wins": null,
  "losses": null,
  "rpi": null,
  "sos": null,
} satisfies SchoolSportSeason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolSportSeason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


