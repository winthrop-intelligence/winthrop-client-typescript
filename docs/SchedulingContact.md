
# SchedulingContact

One school\'s primary scheduling contact.

## Properties

Name | Type
------------ | -------------
`id` | number
`school` | [SchedulingContactSchool](SchedulingContactSchool.md)
`conference` | [SchedulingContactConference](SchedulingContactConference.md)
`person` | [SchedulingContactPerson](SchedulingContactPerson.md)
`cellPhone` | string
`officePhone` | string
`email` | string
`verified` | boolean
`verifiedAt` | Date
`distanceMiles` | number
`openPostsCount` | number

## Example

```typescript
import type { SchedulingContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "school": null,
  "conference": null,
  "person": null,
  "cellPhone": null,
  "officePhone": null,
  "email": null,
  "verified": null,
  "verifiedAt": null,
  "distanceMiles": null,
  "openPostsCount": null,
} satisfies SchedulingContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchedulingContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


