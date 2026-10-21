
# AdminDealStatuses


## Properties

Name | Type
------------ | -------------
`latestDeal` | [AdminDealStatusesLatestDeal](AdminDealStatusesLatestDeal.md)
`foiaNotes` | Array&lt;string&gt;
`id` | number
`schoolId` | number
`dealTypeId` | number
`dealStatusTypeId` | number
`dealSourceId` | number
`school` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`dealType` | [ContactSearchCoachOptionsSportsInner](ContactSearchCoachOptionsSportsInner.md)
`dealStatusType` | [ContactSearchCoachOptionsSportsInner](ContactSearchCoachOptionsSportsInner.md)
`dealSource` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`sourceNote` | string
`note` | string
`autoRenew` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminDealStatuses } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "latestDeal": null,
  "foiaNotes": null,
  "id": null,
  "schoolId": null,
  "dealTypeId": null,
  "dealStatusTypeId": null,
  "dealSourceId": null,
  "school": null,
  "dealType": null,
  "dealStatusType": null,
  "dealSource": null,
  "sourceNote": null,
  "note": null,
  "autoRenew": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminDealStatuses

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminDealStatuses
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


