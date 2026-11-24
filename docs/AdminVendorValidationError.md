
# AdminVendorValidationError


## Properties

Name | Type
------------ | -------------
`errors` | { [key: string]: Array&lt;string&gt;; }
`conflictingVendor` | [AdminVendorValidationErrorConflictingVendor](AdminVendorValidationErrorConflictingVendor.md)

## Example

```typescript
import type { AdminVendorValidationError } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errors": null,
  "conflictingVendor": null,
} satisfies AdminVendorValidationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminVendorValidationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


