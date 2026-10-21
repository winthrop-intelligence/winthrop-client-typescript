
# AdminSchoolName

An alternate/historical name a school is known by (admin namespace)

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`name` | string
`schoolName` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminSchoolName } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "name": null,
  "schoolName": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminSchoolName

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolName
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


