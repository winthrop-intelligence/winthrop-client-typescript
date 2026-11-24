
# FoiaFollowupSentEventSnapshot


## Properties

Name | Type
------------ | -------------
`status` | string
`updatedByWi` | Date
`lastProcessedFollowup` | Date
`followUpDate` | Date
`followUpDateExplicit` | boolean

## Example

```typescript
import type { FoiaFollowupSentEventSnapshot } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "updatedByWi": null,
  "lastProcessedFollowup": null,
  "followUpDate": null,
  "followUpDateExplicit": null,
} satisfies FoiaFollowupSentEventSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowupSentEventSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


