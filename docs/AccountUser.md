
# AccountUser


## Properties

Name | Type
------------ | -------------
`id` | number
`email` | string
`firstName` | string
`lastName` | string
`state` | string
`title` | string
`isAccountAdmin` | boolean
`abilities` | Array&lt;string&gt;
`scheduleSports` | Array&lt;string&gt;
`permissibleSports` | Array&lt;string&gt;

## Example

```typescript
import type { AccountUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "firstName": null,
  "lastName": null,
  "state": null,
  "title": null,
  "isAccountAdmin": null,
  "abilities": null,
  "scheduleSports": null,
  "permissibleSports": null,
} satisfies AccountUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


