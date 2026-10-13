
# ContractHistoryEntryOauthApplication

The API client of a write made through the API; null for admin-UI, job and console edits.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`consumerKey` | string

## Example

```typescript
import type { ContractHistoryEntryOauthApplication } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "consumerKey": null,
} satisfies ContractHistoryEntryOauthApplication

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractHistoryEntryOauthApplication
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


