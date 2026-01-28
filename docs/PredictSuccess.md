
# PredictSuccess


## Properties

Name | Type
------------ | -------------
`isAthletic` | boolean
`model` | string
`probability` | number

## Example

```typescript
import type { PredictSuccess } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "isAthletic": true,
  "model": v1.0.0,
  "probability": 0.971272,
} satisfies PredictSuccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PredictSuccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


