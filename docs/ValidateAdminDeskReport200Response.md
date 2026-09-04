
# ValidateAdminDeskReport200Response


## Properties

Name | Type
------------ | -------------
`errors` | [Array&lt;DeskFinding&gt;](DeskFinding.md)
`publishBlocked` | boolean

## Example

```typescript
import type { ValidateAdminDeskReport200Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errors": null,
  "publishBlocked": null,
} satisfies ValidateAdminDeskReport200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateAdminDeskReport200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


