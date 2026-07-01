
# FoiaFollowUpReportRow


## Properties

Name | Type
------------ | -------------
`foiaRequestId` | number
`foiaRequestAdminUrl` | string
`schoolAdminUrl` | string
`foiaLabelId` | number
`foiaLabelName` | string
`foiaRequestName` | string
`status` | string
`statusLabel` | string
`active` | boolean
`fullyCompleted` | boolean
`directContact` | boolean
`directContactStartedAt` | Date
`completedAt` | Date
`dateSent` | Date
`daysToReceiveRequest` | number
`responseDueDate` | Date
`responseDaysOverdue` | number
`updatedBySchool` | Date
`lastCommsDateBySchool` | Date
`lastCommsDateBySchoolSource` | string
`daysSinceLastCommsBySchool` | number
`updatedByWi` | Date
`lastFollowUpSentAt` | Date
`nextFollowUpDate` | Date
`followUpDate` | Date
`lastProcessedFollowup` | Date
`processedToday` | boolean
`followUpEmailText` | string
`followUpEmailTextSha256` | string
`gmailSearchHints` | [FoiaFollowUpGmailSearchHints](FoiaFollowUpGmailSearchHints.md)
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`state` | string
`stateName` | string
`mail` | boolean
`lawyerSends` | boolean
`portalSite` | string
`forms` | boolean
`requestChannel` | string
`normalizedRequestChannel` | string
`primaryFoiaContact` | [FoiaFollowUpContact](FoiaFollowUpContact.md)
`leadContacts` | [Array&lt;FoiaFollowUpContact&gt;](FoiaFollowUpContact.md)
`ccContacts` | [Array&lt;FoiaFollowUpContact&gt;](FoiaFollowUpContact.md)
`allFoiaContacts` | [Array&lt;FoiaFollowUpContact&gt;](FoiaFollowUpContact.md)
`escalationContacts` | [Array&lt;FoiaFollowUpContact&gt;](FoiaFollowUpContact.md)
`requestedItems` | [Array&lt;FoiaFollowUpRequestedItem&gt;](FoiaFollowUpRequestedItem.md)
`lastRequestedItemReceivedAt` | Date
`receivedItemsLast7dCount` | number
`receivedItemsLast14dCount` | number
`receivedItemsLast30dCount` | number
`receivedAfterLastFollowupCount` | number
`recentReceivedItems` | [Array&lt;FoiaFollowUpRecentReceivedItem&gt;](FoiaFollowUpRecentReceivedItem.md)

## Example

```typescript
import type { FoiaFollowUpReportRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequestId": null,
  "foiaRequestAdminUrl": null,
  "schoolAdminUrl": null,
  "foiaLabelId": null,
  "foiaLabelName": null,
  "foiaRequestName": null,
  "status": null,
  "statusLabel": null,
  "active": null,
  "fullyCompleted": null,
  "directContact": null,
  "directContactStartedAt": null,
  "completedAt": null,
  "dateSent": null,
  "daysToReceiveRequest": null,
  "responseDueDate": null,
  "responseDaysOverdue": null,
  "updatedBySchool": null,
  "lastCommsDateBySchool": null,
  "lastCommsDateBySchoolSource": null,
  "daysSinceLastCommsBySchool": null,
  "updatedByWi": null,
  "lastFollowUpSentAt": null,
  "nextFollowUpDate": null,
  "followUpDate": null,
  "lastProcessedFollowup": null,
  "processedToday": null,
  "followUpEmailText": null,
  "followUpEmailTextSha256": null,
  "gmailSearchHints": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "state": null,
  "stateName": null,
  "mail": null,
  "lawyerSends": null,
  "portalSite": null,
  "forms": null,
  "requestChannel": null,
  "normalizedRequestChannel": null,
  "primaryFoiaContact": null,
  "leadContacts": null,
  "ccContacts": null,
  "allFoiaContacts": null,
  "escalationContacts": null,
  "requestedItems": null,
  "lastRequestedItemReceivedAt": null,
  "receivedItemsLast7dCount": null,
  "receivedItemsLast14dCount": null,
  "receivedItemsLast30dCount": null,
  "receivedAfterLastFollowupCount": null,
  "recentReceivedItems": null,
} satisfies FoiaFollowUpReportRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaFollowUpReportRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


