
# DepartmentCoachVerdict


## Properties

Name | Type
------------ | -------------
`bucket` | string
`payRank` | number
`finishRank` | number
`delta` | number
`firstYear` | boolean
`contractYear` | number
`contractLengthYears` | number
`approximate` | boolean

## Example

```typescript
import type { DepartmentCoachVerdict } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "payRank": null,
  "finishRank": null,
  "delta": null,
  "firstYear": null,
  "contractYear": null,
  "contractLengthYears": null,
  "approximate": null,
} satisfies DepartmentCoachVerdict

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachVerdict
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


