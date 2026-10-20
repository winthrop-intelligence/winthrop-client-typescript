
# AdminNoteUser


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`state` | string
`account` | [AdminNoteUserAccount](AdminNoteUserAccount.md)

## Example

```typescript
import type { AdminNoteUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "state": null,
  "account": null,
} satisfies AdminNoteUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminNoteUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


