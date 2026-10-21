
# AdminDeal


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`dealTypeId` | number
`startAt` | Date
`endAt` | Date
`autorenew` | boolean
`archived` | boolean
`verified` | boolean
`text` | string
`summary` | string
`createdAt` | Date
`updatedAt` | Date
`school` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`dealType` | [AdminCoachCurrentSport](AdminCoachCurrentSport.md)
`vendors` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`rawContract` | [AdminDealRawContract](AdminDealRawContract.md)
`dealDetail` | [AdminDealDealDetail](AdminDealDealDetail.md)

## Example

```typescript
import type { AdminDeal } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "dealTypeId": null,
  "startAt": null,
  "endAt": null,
  "autorenew": null,
  "archived": null,
  "verified": null,
  "text": null,
  "summary": null,
  "createdAt": null,
  "updatedAt": null,
  "school": null,
  "dealType": null,
  "vendors": null,
  "rawContract": null,
  "dealDetail": null,
} satisfies AdminDeal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminDeal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


