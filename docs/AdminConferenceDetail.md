
# AdminConferenceDetail


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string
`nickname` | string
`headquarters` | string
`founded` | number
`divisionId` | number
`externalUrl` | string
`createdAt` | Date
`updatedAt` | Date
`division` | [AdminConferenceDivision](AdminConferenceDivision.md)
`schoolsCount` | number
`fullMemberSchoolsCount` | number
`subdivisionOptions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)
`directSubdivisions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)
`schools` | [Array&lt;IdName&gt;](IdName.md)
`fullMemberSchools` | [Array&lt;IdName&gt;](IdName.md)

## Example

```typescript
import type { AdminConferenceDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameDisplay": null,
  "nickname": null,
  "headquarters": null,
  "founded": null,
  "divisionId": null,
  "externalUrl": null,
  "createdAt": null,
  "updatedAt": null,
  "division": null,
  "schoolsCount": null,
  "fullMemberSchoolsCount": null,
  "subdivisionOptions": null,
  "directSubdivisions": null,
  "schools": null,
  "fullMemberSchools": null,
} satisfies AdminConferenceDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminConferenceDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


