
# AdminImpersonation


## Properties

Name | Type
------------ | -------------
`impersonatedUser` | [AdminImpersonationImpersonatedUser](AdminImpersonationImpersonatedUser.md)
`adminUserId` | number

## Example

```typescript
import type { AdminImpersonation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "impersonatedUser": null,
  "adminUserId": null,
} satisfies AdminImpersonation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminImpersonation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


