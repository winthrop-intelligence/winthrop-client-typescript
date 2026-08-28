
# FinancialSelection


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`source` | string
`grain` | string
`requestedYear` | number
`results` | [Array&lt;FinancialSelectionResult&gt;](FinancialSelectionResult.md)

## Example

```typescript
import type { FinancialSelection } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "source": null,
  "grain": null,
  "requestedYear": null,
  "results": null,
} satisfies FinancialSelection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialSelection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


