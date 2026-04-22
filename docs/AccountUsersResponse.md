
# AccountUsersResponse


## Properties

Name | Type
------------ | -------------
`meta` | [Meta](Meta.md)
`account` | [AccountInfo](AccountInfo.md)
`users` | [Array&lt;AccountUser&gt;](AccountUser.md)

## Example

```typescript
import type { AccountUsersResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "account": null,
  "users": null,
} satisfies AccountUsersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountUsersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


