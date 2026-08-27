
# DepartmentStaffMember


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`coachName` | string
`totalComp` | number
`positionTitle` | string
`photoUrl` | string

## Example

```typescript
import type { DepartmentStaffMember } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "coachName": null,
  "totalComp": null,
  "positionTitle": null,
  "photoUrl": null,
} satisfies DepartmentStaffMember

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentStaffMember
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


