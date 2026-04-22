
# EditAccountUserResponse


## Properties

Name | Type
------------ | -------------
`user` | [EditAccountUser](EditAccountUser.md)
`roleOptions` | [Array&lt;RoleOption&gt;](RoleOption.md)
`schedulableSports` | [Array&lt;SportOption&gt;](SportOption.md)
`allSports` | [Array&lt;SportOption&gt;](SportOption.md)

## Example

```typescript
import type { EditAccountUserResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "roleOptions": null,
  "schedulableSports": null,
  "allSports": null,
} satisfies EditAccountUserResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EditAccountUserResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


