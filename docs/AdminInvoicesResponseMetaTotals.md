
# AdminInvoicesResponseMetaTotals

Over ALL the rows the filters match, never just this page. Present for status=not_paid and null for every other status. An invoice\'s amount_cents, or the schedule\'s billing amount for a year with no invoice (a row whose amount cannot be suggested adds nothing).

## Properties

Name | Type
------------ | -------------
`totalAmountCents` | number
`accountsCount` | number
`neverSentAmountCents` | number

## Example

```typescript
import type { AdminInvoicesResponseMetaTotals } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalAmountCents": null,
  "accountsCount": null,
  "neverSentAmountCents": null,
} satisfies AdminInvoicesResponseMetaTotals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminInvoicesResponseMetaTotals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


