
# FrsResolveRequest


## Properties

Name | Type
------------ | -------------
`scopeMode` | string
`conferenceId` | number
`schoolGroupId` | number
`financialYear` | number
`schoolIds` | Array&lt;number&gt;

## Example

```typescript
import type { FrsResolveRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "scopeMode": null,
  "conferenceId": null,
  "schoolGroupId": null,
  "financialYear": null,
  "schoolIds": null,
} satisfies FrsResolveRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrsResolveRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


