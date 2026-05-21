
# UpdateUserRequestUser


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`timeZone` | string
`schedulingNotifications` | boolean
`gamePostNotifications` | boolean
`gamesDigest` | boolean
`currentPassword` | string
`password` | string
`passwordConfirmation` | string

## Example

```typescript
import type { UpdateUserRequestUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "timeZone": null,
  "schedulingNotifications": null,
  "gamePostNotifications": null,
  "gamesDigest": null,
  "currentPassword": null,
  "password": null,
  "passwordConfirmation": null,
} satisfies UpdateUserRequestUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateUserRequestUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


