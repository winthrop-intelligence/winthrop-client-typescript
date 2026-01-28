
# Conferenceship


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`sportId` | number
`conferenceId` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Conferenceship } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "sportId": null,
  "conferenceId": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies Conferenceship

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Conferenceship
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


