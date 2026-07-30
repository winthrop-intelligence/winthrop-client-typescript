
# JobPostDisagreementCollection


## Properties

Name | Type
------------ | -------------
`_new` | [Array&lt;JobPostDisagreement&gt;](JobPostDisagreement.md)
`newTruncated` | boolean
`newTotalCount` | number
`stillPending` | [Array&lt;JobPostDisagreement&gt;](JobPostDisagreement.md)
`stillPendingTruncated` | boolean
`stillPendingTotalCount` | number

## Example

```typescript
import type { JobPostDisagreementCollection } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "_new": null,
  "newTruncated": null,
  "newTotalCount": null,
  "stillPending": null,
  "stillPendingTruncated": null,
  "stillPendingTotalCount": null,
} satisfies JobPostDisagreementCollection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostDisagreementCollection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


