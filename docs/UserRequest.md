
# UserRequest


## Properties

Name | Type
------------ | -------------
`id` | number
`userId` | number
`url` | string
`ipAddress` | string
`data1` | string
`createdAt` | Date
`updatedAt` | Date
`requestType` | number
`tab` | string
`city` | string
`state` | string
`latitude` | number
`longitude` | number
`deviceId` | number

## Example

```typescript
import type { UserRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "url": null,
  "ipAddress": null,
  "data1": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "requestType": null,
  "tab": null,
  "city": null,
  "state": null,
  "latitude": null,
  "longitude": null,
  "deviceId": null,
} satisfies UserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


