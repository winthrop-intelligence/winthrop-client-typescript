
# CompStats


## Properties

Name | Type
------------ | -------------
`min` | number
`max` | number
`average` | number
`median` | number

## Example

```typescript
import type { CompStats } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "min": 500000,
  "max": 324000000,
  "average": 10413700,
  "median": 7500000,
} satisfies CompStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


