
# GamePost


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`sportId` | number
`startDate` | Date
`endDate` | Date
`description` | string
`status` | string
`expiresOn` | Date
`createdAt` | Date
`updatedAt` | Date
`gameTypes` | [Array&lt;GameType&gt;](GameType.md)

## Example

```typescript
import type { GamePost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "sportId": null,
  "startDate": Mon Jan 01 00:00:00 UTC 2024,
  "endDate": Wed Jan 31 00:00:00 UTC 2024,
  "description": null,
  "status": null,
  "expiresOn": Fri Mar 15 00:00:00 UTC 2024,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "gameTypes": null,
} satisfies GamePost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


