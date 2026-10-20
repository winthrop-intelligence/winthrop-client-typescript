
# AdminFoiaFollowUpReportDataInner


## Properties

Name | Type
------------ | -------------
`id` | number
`state` | string
`status` | string
`dateSent` | Date
`updatedBySchool` | string
`updatedByWi` | Date
`followUpDate` | Date
`lastProcessedFollowup` | Date
`createdAt` | Date
`updatedAt` | Date
`school` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`foiaLabel` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`createdBy` | string
`updatedBy` | string
`requestedItemsCount` | number
`receivedItemsCount` | number
`statusPercentage` | number
`dealStatusIds` | Array&lt;number&gt;
`foiaNotes` | [Array&lt;AdminFoiaRequestNote&gt;](AdminFoiaRequestNote.md)
`vendorOptions` | [Array&lt;AdminFoiaVendorOption&gt;](AdminFoiaVendorOption.md)
`receivedCount` | number
`totalItems` | number
`schoolNotes` | [Array&lt;AdminFoiaRequestNote&gt;](AdminFoiaRequestNote.md)
`followUpEmailText` | string
`alreadyProcessedToday` | boolean

## Example

```typescript
import type { AdminFoiaFollowUpReportDataInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "state": null,
  "status": null,
  "dateSent": null,
  "updatedBySchool": null,
  "updatedByWi": null,
  "followUpDate": null,
  "lastProcessedFollowup": null,
  "createdAt": null,
  "updatedAt": null,
  "school": null,
  "foiaLabel": null,
  "createdBy": null,
  "updatedBy": null,
  "requestedItemsCount": null,
  "receivedItemsCount": null,
  "statusPercentage": null,
  "dealStatusIds": null,
  "foiaNotes": null,
  "vendorOptions": null,
  "receivedCount": null,
  "totalItems": null,
  "schoolNotes": null,
  "followUpEmailText": null,
  "alreadyProcessedToday": null,
} satisfies AdminFoiaFollowUpReportDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaFollowUpReportDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


