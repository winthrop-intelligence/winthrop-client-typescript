
# Sport


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameAka` | string
`nameDisplay` | string
`genderCode` | string
`emerging` | boolean
`meetSport` | boolean
`createdAt` | Date
`updatedAt` | Date
`ncaaId` | string

## Example

```typescript
import type { Sport } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": BOWLING,
  "nameAka": bowling,
  "nameDisplay": Bowling,
  "genderCode": null,
  "emerging": false,
  "meetSport": false,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "ncaaId": MBA,
} satisfies Sport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Sport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


