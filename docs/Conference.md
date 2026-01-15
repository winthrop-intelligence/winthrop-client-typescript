
# Conference


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string
`nickname` | string
`headquarters` | string
`founded` | number
`divisionId` | number
`ord` | number
`createdAt` | Date
`updatedAt` | Date
`externalUrl` | string

## Example

```typescript
import type { Conference } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameDisplay": null,
  "nickname": null,
  "headquarters": null,
  "founded": null,
  "divisionId": null,
  "ord": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "externalUrl": null,
} satisfies Conference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Conference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


