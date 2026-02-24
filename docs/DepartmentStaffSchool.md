
# DepartmentStaffSchool


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`staff` | [Array&lt;DepartmentStaffMember&gt;](DepartmentStaffMember.md)

## Example

```typescript
import type { DepartmentStaffSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "staff": null,
} satisfies DepartmentStaffSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentStaffSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


