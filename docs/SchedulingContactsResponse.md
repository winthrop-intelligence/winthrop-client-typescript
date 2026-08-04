
# SchedulingContactsResponse

WINAD-10119 Scheduling Contacts directory payload.

## Properties

Name | Type
------------ | -------------
`contacts` | [Array&lt;SchedulingContact&gt;](SchedulingContact.md)
`viewerSchoolName` | string
`viewerSchoolLogoUrl` | string
`viewerHasLocation` | boolean

## Example

```typescript
import type { SchedulingContactsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "contacts": null,
  "viewerSchoolName": null,
  "viewerSchoolLogoUrl": null,
  "viewerHasLocation": null,
} satisfies SchedulingContactsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchedulingContactsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


