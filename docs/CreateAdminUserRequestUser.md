
# CreateAdminUserRequestUser


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`timeZone` | string
`otpDisabledReason` | string
`password` | string
`passwordConfirmation` | string
`title` | string
`directoryLink` | string
`otpRequired` | boolean
`doNotSendInvoiceEmails` | boolean
`schedulingNotifications` | boolean
`gamePostNotifications` | boolean
`gamesDigest` | boolean
`noProfile` | boolean
`accountId` | number
`coachId` | number
`roleSymbols` | Array&lt;string&gt;
`scheduleSportIds` | Array&lt;number&gt;
`permissibleSportIds` | Array&lt;number&gt;
`skipConfirmation` | boolean

## Example

```typescript
import type { CreateAdminUserRequestUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "timeZone": null,
  "otpDisabledReason": null,
  "password": null,
  "passwordConfirmation": null,
  "title": null,
  "directoryLink": null,
  "otpRequired": null,
  "doNotSendInvoiceEmails": null,
  "schedulingNotifications": null,
  "gamePostNotifications": null,
  "gamesDigest": null,
  "noProfile": null,
  "accountId": null,
  "coachId": null,
  "roleSymbols": null,
  "scheduleSportIds": null,
  "permissibleSportIds": null,
  "skipConfirmation": null,
} satisfies CreateAdminUserRequestUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminUserRequestUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


