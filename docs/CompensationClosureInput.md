
# CompensationClosureInput


## Properties

Name | Type
------------ | -------------
`reason` | string
`note` | string
`expectedStatus` | string

## Example

```typescript
import type { CompensationClosureInput } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "reason": null,
  "note": Not employed. Joined UMES June 2026.,
  "expectedStatus": null,
} satisfies CompensationClosureInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationClosureInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


