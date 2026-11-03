
# UpdateContractRequestContractableTypeEnum

Sets the owner type (WINAD-10739), for example to repair a contract saved with a contractable_id and no type. Only Coach is accepted. A contract with no owner id needs coach_id / contractable_id in the same request, because the type alone is a 422 (errors.contractable_id). Together with coach_id / contractable_id these are the only fields a pending contract accepts.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { UpdateContractRequestContractableTypeEnum } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
} satisfies UpdateContractRequestContractableTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateContractRequestContractableTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


