
# DepartmentOverviewPrivateAd


## Properties

Name | Type
------------ | -------------
`coachId` | number
`friendlyId` | string
`name` | string
`title` | string
`sinceYear` | number
`yearsAtSchool` | number
`comp` | [DepartmentOverviewPrivateAdComp](DepartmentOverviewPrivateAdComp.md)

## Example

```typescript
import type { DepartmentOverviewPrivateAd } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "friendlyId": null,
  "name": null,
  "title": null,
  "sinceYear": null,
  "yearsAtSchool": null,
  "comp": null,
} satisfies DepartmentOverviewPrivateAd

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewPrivateAd
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


