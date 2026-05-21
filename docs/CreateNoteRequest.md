
# CreateNoteRequest


## Properties

Name | Type
------------ | -------------
`notableType` | string
`notableId` | number
`content` | string

## Example

```typescript
import type { CreateNoteRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "notableType": null,
  "notableId": null,
  "content": null,
} satisfies CreateNoteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateNoteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


