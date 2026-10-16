
# AdminFoiaContact

A school\'s FOIA (public-records) contact

## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`email` | string
`type` | string
`position` | string
`phone` | string
`formattedPhone` | string
`mailingAddress` | string
`contactPageUrl` | string
`schoolId` | number
`school` | [IdName](IdName.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminFoiaContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "type": null,
  "position": null,
  "phone": null,
  "formattedPhone": null,
  "mailingAddress": null,
  "contactPageUrl": null,
  "schoolId": null,
  "school": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminFoiaContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


