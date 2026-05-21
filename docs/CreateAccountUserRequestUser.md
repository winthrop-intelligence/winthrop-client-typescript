
# CreateAccountUserRequestUser


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`title` | string
`email` | string
`timeZone` | string
`roleSymbols` | Array&lt;string&gt;
`scheduleSportIds` | Array&lt;number&gt;
`permissibleSportIds` | Array&lt;number&gt;

## Example

```typescript
import type { CreateAccountUserRequestUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "title": null,
  "email": null,
  "timeZone": null,
  "roleSymbols": null,
  "scheduleSportIds": null,
  "permissibleSportIds": null,
} satisfies CreateAccountUserRequestUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAccountUserRequestUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


