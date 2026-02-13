
# DepartmentSearchResult


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`shortName` | string
`city` | string
`stateName` | string
`conferenceName` | string
`conferenceId` | number
`divisionName` | string
`divisionId` | number
`usnwrRanking` | number
`directorsCupRanking` | number
`isPrivate` | boolean
`nickname` | string

## Example

```typescript
import type { DepartmentSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "shortName": null,
  "city": null,
  "stateName": null,
  "conferenceName": null,
  "conferenceId": null,
  "divisionName": null,
  "divisionId": null,
  "usnwrRanking": null,
  "directorsCupRanking": null,
  "isPrivate": null,
  "nickname": null,
} satisfies DepartmentSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


