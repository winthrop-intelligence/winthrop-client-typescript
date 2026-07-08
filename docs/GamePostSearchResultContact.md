
# GamePostSearchResultContact

WINAD-10053: the school+sport scheduling contact for this card, sourced exactly like the /schedules grid (the first Contact for the school+sport and its coach). Each method (office/cell/email) carries an explicit present flag so the card renders \"not on file\" for a missing method rather than faking a value. Null when the school+sport has no contact.

## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`office` | [GamePostSearchResultContactOffice](GamePostSearchResultContactOffice.md)
`cell` | [GamePostSearchResultContactCell](GamePostSearchResultContactCell.md)
`email` | [GamePostSearchResultContactEmail](GamePostSearchResultContactEmail.md)
`schedulingPhone` | string
`schedulingPhoneDial` | string

## Example

```typescript
import type { GamePostSearchResultContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "title": null,
  "office": null,
  "cell": null,
  "email": null,
  "schedulingPhone": null,
  "schedulingPhoneDial": null,
} satisfies GamePostSearchResultContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostSearchResultContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


