
# GamePostContact

Contact person for a game post\'s school and sport

## Properties

Name | Type
------------ | -------------
`coachName` | string
`coachId` | number
`position` | string
`email` | string
`phone` | string
`phoneDial` | string

## Example

```typescript
import type { GamePostContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachName": null,
  "coachId": null,
  "position": null,
  "email": null,
  "phone": null,
  "phoneDial": null,
} satisfies GamePostContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


