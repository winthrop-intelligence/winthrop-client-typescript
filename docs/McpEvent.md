
# McpEvent


## Properties

Name | Type
------------ | -------------
`id` | number
`eventUuid` | string
`eventName` | string
`userId` | number
`accountId` | number
`schoolId` | number
`createdAt` | Date

## Example

```typescript
import type { McpEvent } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventUuid": null,
  "eventName": null,
  "userId": null,
  "accountId": null,
  "schoolId": null,
  "createdAt": null,
} satisfies McpEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


