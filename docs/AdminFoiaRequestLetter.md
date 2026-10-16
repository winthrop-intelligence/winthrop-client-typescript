
# AdminFoiaRequestLetter


## Properties

Name | Type
------------ | -------------
`schoolName` | string
`requestId` | number
`portalSite` | string
`leadContact` | string
`ccEmails` | Array&lt;string&gt;
`needsForm` | boolean
`greeting` | string
`intro` | string
`closing` | string
`sections` | [Array&lt;AdminFoiaRequestLetterSectionsInner&gt;](AdminFoiaRequestLetterSectionsInner.md)

## Example

```typescript
import type { AdminFoiaRequestLetter } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolName": null,
  "requestId": null,
  "portalSite": null,
  "leadContact": null,
  "ccEmails": null,
  "needsForm": null,
  "greeting": null,
  "intro": null,
  "closing": null,
  "sections": null,
} satisfies AdminFoiaRequestLetter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestLetter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


