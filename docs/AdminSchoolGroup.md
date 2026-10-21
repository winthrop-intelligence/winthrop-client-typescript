
# AdminSchoolGroup

A user-owned private peer set of schools (admin namespace)

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`createdAt` | Date
`updatedAt` | Date
`user` | [AdminSchoolGroupUser](AdminSchoolGroupUser.md)
`account` | [AdminSchoolGroupAccount](AdminSchoolGroupAccount.md)
`schools` | [Array&lt;IdName&gt;](IdName.md)
`schoolIds` | Array&lt;number&gt;

## Example

```typescript
import type { AdminSchoolGroup } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "createdAt": null,
  "updatedAt": null,
  "user": null,
  "account": null,
  "schools": null,
  "schoolIds": null,
} satisfies AdminSchoolGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


