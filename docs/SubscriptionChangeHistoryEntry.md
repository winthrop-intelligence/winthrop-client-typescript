
# SubscriptionChangeHistoryEntry


## Properties

Name | Type
------------ | -------------
`id` | number
`occurredAt` | Date
`occurredAtLabel` | string
`actor` | string
`recordLabel` | string
`eventLabel` | string
`changes` | [Array&lt;SubscriptionChangeHistoryChange&gt;](SubscriptionChangeHistoryChange.md)

## Example

```typescript
import type { SubscriptionChangeHistoryEntry } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "occurredAt": null,
  "occurredAtLabel": Sep 14, 2026 3:05 PM,
  "actor": History Editor (editor@example.com),
  "recordLabel": Invoice INV-4468,
  "eventLabel": null,
  "changes": null,
} satisfies SubscriptionChangeHistoryEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionChangeHistoryEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


