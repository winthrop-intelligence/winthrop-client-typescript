
# UpdateAccountUserActivationRequest


## Properties

Name | Type
------------ | -------------
`confirmationToken` | string
`user` | [UpdateAccountUserActivationRequestUser](UpdateAccountUserActivationRequestUser.md)

## Example

```typescript
import type { UpdateAccountUserActivationRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "confirmationToken": null,
  "user": null,
} satisfies UpdateAccountUserActivationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAccountUserActivationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


