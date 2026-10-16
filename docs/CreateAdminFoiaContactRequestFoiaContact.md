
# CreateAdminFoiaContactRequestFoiaContact


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`type` | string
`position` | string
`phone` | string
`mailingAddress` | string
`contactPageUrl` | string
`schoolId` | number

## Example

```typescript
import type { CreateAdminFoiaContactRequestFoiaContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "type": null,
  "position": null,
  "phone": null,
  "mailingAddress": null,
  "contactPageUrl": null,
  "schoolId": null,
} satisfies CreateAdminFoiaContactRequestFoiaContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminFoiaContactRequestFoiaContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


