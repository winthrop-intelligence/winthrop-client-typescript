
# Note


## Properties

Name | Type
------------ | -------------
`id` | number
`notableId` | number
`notableType` | string
`content` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Note } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "notableId": null,
  "notableType": null,
  "content": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Note

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Note
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


