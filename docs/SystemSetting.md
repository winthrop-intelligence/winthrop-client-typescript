
# SystemSetting


## Properties

Name | Type
------------ | -------------
`id` | number
`currentSeasonYear` | number
`currentFinancialsSeasonYear` | number
`scheduleSeasonYear` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SystemSetting } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "currentSeasonYear": 2019,
  "currentFinancialsSeasonYear": 2019,
  "scheduleSeasonYear": 2020,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies SystemSetting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemSetting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


