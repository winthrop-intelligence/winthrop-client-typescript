
# FoiaFollowUpContact


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`email` | string
`title` | string
`position` | string
`phone` | string
`mailingAddress` | string
`type` | string
`usedForGmailHinting` | boolean

## Example

```typescript
import type { FoiaFollowUpContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "email": null,
  "title": null,
  "position": null,
  "phone": null,
  "mailingAddress": null,
  "type": null,
  "usedForGmailHinting": null,
} satisfies FoiaFollowUpContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowUpContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


