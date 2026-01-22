
# UserActivitySummary


## Properties

Name | Type
------------ | -------------
`id` | number
`month` | number
`year` | number
`activityCount` | number
`userCount` | number
`activeUserCount` | number
`createdAt` | Date
`updatedAt` | Date
`schoolCount` | number
`activeSchoolCount` | number

## Example

```typescript
import type { UserActivitySummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "month": null,
  "year": null,
  "activityCount": null,
  "userCount": null,
  "activeUserCount": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "schoolCount": null,
  "activeSchoolCount": null,
} satisfies UserActivitySummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserActivitySummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


