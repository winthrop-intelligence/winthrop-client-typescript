
# MassUpdateAdminCompensationsRequest


## Properties

Name | Type
------------ | -------------
`coachId` | number
`compensations` | [Array&lt;MassUpdateAdminCompensationsRequestCompensationsInner&gt;](MassUpdateAdminCompensationsRequestCompensationsInner.md)

## Example

```typescript
import type { MassUpdateAdminCompensationsRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "compensations": null,
} satisfies MassUpdateAdminCompensationsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassUpdateAdminCompensationsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


