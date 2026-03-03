
# CashflowGroupsResponse


## Properties

Name | Type
------------ | -------------
`revenues` | [Array&lt;CashflowGroupItem&gt;](CashflowGroupItem.md)
`expenses` | [Array&lt;CashflowGroupItem&gt;](CashflowGroupItem.md)

## Example

```typescript
import type { CashflowGroupsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "revenues": null,
  "expenses": null,
} satisfies CashflowGroupsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashflowGroupsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


