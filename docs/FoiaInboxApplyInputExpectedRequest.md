
# FoiaInboxApplyInputExpectedRequest


## Properties

Name | Type
------------ | -------------
`status` | string
`updatedAt` | Date
`updatedBySchool` | Date
`updatedByWi` | Date
`foiaNotesSha256` | string

## Example

```typescript
import type { FoiaInboxApplyInputExpectedRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "updatedAt": null,
  "updatedBySchool": null,
  "updatedByWi": null,
  "foiaNotesSha256": null,
} satisfies FoiaInboxApplyInputExpectedRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxApplyInputExpectedRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


