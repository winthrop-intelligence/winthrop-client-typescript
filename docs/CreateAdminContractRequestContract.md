
# CreateAdminContractRequestContract


## Properties

Name | Type
------------ | -------------
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`contingentChange` | boolean

## Example

```typescript
import type { CreateAdminContractRequestContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "startOn": null,
  "endOn": null,
  "atWill": null,
  "contingentChange": null,
} satisfies CreateAdminContractRequestContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminContractRequestContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


