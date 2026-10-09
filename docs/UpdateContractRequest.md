
# UpdateContractRequest

Partial update of a published contract. At least one of start_on, end_on or at_will is required; change_note alone is insufficient. Pending contracts are published, not edited. Setting at_will true requires end_on null. Changes are audited with the authenticated user and the optional change_note. 

## Properties

Name | Type
------------ | -------------
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`changeNote` | string

## Example

```typescript
import type { UpdateContractRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "startOn": null,
  "endOn": null,
  "atWill": null,
  "changeNote": null,
} satisfies UpdateContractRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateContractRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


