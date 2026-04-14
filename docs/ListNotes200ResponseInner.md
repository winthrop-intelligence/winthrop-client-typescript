
# ListNotes200ResponseInner


## Properties

Name | Type
------------ | -------------
`id` | number
`notableId` | number
`notableType` | string
`content` | string
`name` | string
`createdAt` | Date
`updatedAt` | Date
`schoolId` | number
`sportName` | string

## Example

```typescript
import type { ListNotes200ResponseInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "notableId": null,
  "notableType": null,
  "content": null,
  "name": null,
  "createdAt": null,
  "updatedAt": null,
  "schoolId": null,
  "sportName": null,
} satisfies ListNotes200ResponseInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListNotes200ResponseInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


