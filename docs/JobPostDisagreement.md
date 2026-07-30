
# JobPostDisagreement


## Properties

Name | Type
------------ | -------------
`jobPostId` | number
`title` | string
`description` | string
`schoolName` | string
`link` | string
`createdAt` | Date
`llmIsAthletics` | boolean
`mlIsAthletics` | boolean
`reasoning` | string
`adminUrl` | string
`novelty` | string

## Example

```typescript
import type { JobPostDisagreement } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "jobPostId": null,
  "title": null,
  "description": null,
  "schoolName": null,
  "link": null,
  "createdAt": null,
  "llmIsAthletics": null,
  "mlIsAthletics": null,
  "reasoning": null,
  "adminUrl": null,
  "novelty": null,
} satisfies JobPostDisagreement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPostDisagreement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


