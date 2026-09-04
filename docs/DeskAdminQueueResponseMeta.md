
# DeskAdminQueueResponseMeta


## Properties

Name | Type
------------ | -------------
`totalEntries` | number
`counts` | { [key: string]: number; }
`accounts` | [Array&lt;DeskAdminAccount&gt;](DeskAdminAccount.md)
`everySchoolUserCount` | number

## Example

```typescript
import type { DeskAdminQueueResponseMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalEntries": null,
  "counts": null,
  "accounts": null,
  "everySchoolUserCount": null,
} satisfies DeskAdminQueueResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminQueueResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


