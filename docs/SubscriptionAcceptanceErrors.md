
# SubscriptionAcceptanceErrors


## Properties

Name | Type
------------ | -------------
`errors` | Array&lt;string&gt;
`accepted` | boolean

## Example

```typescript
import type { SubscriptionAcceptanceErrors } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "errors": ["This order form link is invalid."],
  "accepted": true,
} satisfies SubscriptionAcceptanceErrors

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionAcceptanceErrors
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


