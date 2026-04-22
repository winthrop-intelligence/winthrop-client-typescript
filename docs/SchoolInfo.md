
# SchoolInfo


## Properties

Name | Type
------------ | -------------
`totalStudentEnrollment` | number
`maleStudents` | number
`femaleStudents` | number
`studentAthleteEnrollment` | number
`maleAthletes` | number
`femaleAthletes` | number
`sportCount` | number

## Example

```typescript
import type { SchoolInfo } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "totalStudentEnrollment": null,
  "maleStudents": null,
  "femaleStudents": null,
  "studentAthleteEnrollment": null,
  "maleAthletes": null,
  "femaleAthletes": null,
  "sportCount": null,
} satisfies SchoolInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


