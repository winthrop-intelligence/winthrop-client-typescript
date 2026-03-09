
# DepartmentSearchResultDepartment


## Properties

Name | Type
------------ | -------------
`adName` | string
`adCoachId` | number
`adSalaryCents` | number
`revenueCents` | number
`expenseCents` | number
`deals` | [Array&lt;DepartmentSearchResultDepartmentDealsInner&gt;](DepartmentSearchResultDepartmentDealsInner.md)

## Example

```typescript
import type { DepartmentSearchResultDepartment } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "adName": null,
  "adCoachId": null,
  "adSalaryCents": null,
  "revenueCents": null,
  "expenseCents": null,
  "deals": null,
} satisfies DepartmentSearchResultDepartment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentSearchResultDepartment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


