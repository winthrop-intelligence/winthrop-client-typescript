
# SchoolFinancialDetail


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`year` | number
`group` | [SchoolFinancialDetailGroup](SchoolFinancialDetailGroup.md)
`total` | number
`sports` | [Array&lt;SchoolFinancialDetailSport&gt;](SchoolFinancialDetailSport.md)
`siblings` | [Array&lt;SchoolFinancialDetailSibling&gt;](SchoolFinancialDetailSibling.md)

## Example

```typescript
import type { SchoolFinancialDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "schoolName": null,
  "year": null,
  "group": null,
  "total": null,
  "sports": null,
  "siblings": null,
} satisfies SchoolFinancialDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolFinancialDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


