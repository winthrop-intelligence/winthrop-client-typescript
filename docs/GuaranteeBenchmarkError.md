
# GuaranteeBenchmarkError

Structured error returned in place of tier data when sport_id is missing or unknown.

## Properties

Name | Type
------------ | -------------
`errorType` | string
`message` | string
`suggestedFix` | string
`receivedArgs` | { [key: string]: any; }

## Example

```typescript
import type { GuaranteeBenchmarkError } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errorType": null,
  "message": null,
  "suggestedFix": null,
  "receivedArgs": null,
} satisfies GuaranteeBenchmarkError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuaranteeBenchmarkError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


