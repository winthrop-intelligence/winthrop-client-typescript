
# ConferenceCashflowStatsResponse


## Properties

Name | Type
------------ | -------------
`year` | number
`groups` | [Array&lt;CashflowGroupStats&gt;](CashflowGroupStats.md)

## Example

```typescript
import type { ConferenceCashflowStatsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "groups": null,
} satisfies ConferenceCashflowStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConferenceCashflowStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


