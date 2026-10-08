
# FoiaStatusSummaryFlags


## Properties

Name | Type
------------ | -------------
`overdueForUpdate` | boolean
`needsFollowUp` | boolean
`completeButActive` | boolean

## Example

```typescript
import type { FoiaStatusSummaryFlags } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "overdueForUpdate": null,
  "needsFollowUp": null,
  "completeButActive": null,
} satisfies FoiaStatusSummaryFlags

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaStatusSummaryFlags
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


