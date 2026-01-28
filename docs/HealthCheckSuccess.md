
# HealthCheckSuccess


## Properties

Name | Type
------------ | -------------
`status` | string
`message` | string
`model` | string

## Example

```typescript
import type { HealthCheckSuccess } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": ok,
  "message": Model loaded and API is running,
  "model": v1.0.0,
} satisfies HealthCheckSuccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckSuccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


