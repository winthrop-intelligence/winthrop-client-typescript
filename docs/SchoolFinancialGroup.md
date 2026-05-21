
# SchoolFinancialGroup


## Properties

Name | Type
------------ | -------------
`groupId` | number
`name` | string
`nameId` | string
`reportLabel` | string
`football` | number
`basketballM` | number
`basketballW` | number
`other` | number
`total` | number

## Example

```typescript
import type { SchoolFinancialGroup } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "groupId": null,
  "name": null,
  "nameId": null,
  "reportLabel": null,
  "football": null,
  "basketballM": null,
  "basketballW": null,
  "other": null,
  "total": null,
} satisfies SchoolFinancialGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolFinancialGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


