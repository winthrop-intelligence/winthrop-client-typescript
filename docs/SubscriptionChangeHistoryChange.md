
# SubscriptionChangeHistoryChange


## Properties

Name | Type
------------ | -------------
`label` | string
`from` | string
`to` | string
`text` | string

## Example

```typescript
import type { SubscriptionChangeHistoryChange } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "label": Amount,
  "from": $14,700,
  "to": $14.70,
  "text": Amount: $14,700 -> $14.70,
} satisfies SubscriptionChangeHistoryChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionChangeHistoryChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


