
# AdminUser

A single system user\'s full editable detail (admin namespace, cross-account)

## Properties

Name | Type
------------ | -------------
`activity` | [Array&lt;AdminUserActivityInner&gt;](AdminUserActivityInner.md)
`subscription` | [AdminUserSubscription](AdminUserSubscription.md)
`passwordChangedAt` | Date
`id` | number
`firstName` | string
`lastName` | string
`email` | string
`state` | string
`timeZone` | string
`otpRequired` | boolean
`otpDisabledReason` | string
`doNotSendInvoiceEmails` | boolean
`schedulingNotifications` | boolean
`gamePostNotifications` | boolean
`gamesDigest` | boolean
`title` | string
`directoryLink` | string
`createdAt` | Date
`termsAcceptedAt` | Date
`confirmedAt` | Date
`fullName` | string
`account` | [AdminSchoolGroupAccount](AdminSchoolGroupAccount.md)
`coach` | [AdminUserCoach](AdminUserCoach.md)
`roleSymbols` | Array&lt;string&gt;
`scheduleSportIds` | Array&lt;number&gt;
`scheduleSports` | [Array&lt;IdName&gt;](IdName.md)
`permissibleSportIds` | Array&lt;number&gt;
`permissibleSports` | [Array&lt;IdName&gt;](IdName.md)
`activityCountLast180Days` | number
`createdBy` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)

## Example

```typescript
import type { AdminUser } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "activity": null,
  "subscription": null,
  "passwordChangedAt": null,
  "id": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "state": null,
  "timeZone": null,
  "otpRequired": null,
  "otpDisabledReason": null,
  "doNotSendInvoiceEmails": null,
  "schedulingNotifications": null,
  "gamePostNotifications": null,
  "gamesDigest": null,
  "title": null,
  "directoryLink": null,
  "createdAt": null,
  "termsAcceptedAt": null,
  "confirmedAt": null,
  "fullName": null,
  "account": null,
  "coach": null,
  "roleSymbols": null,
  "scheduleSportIds": null,
  "scheduleSports": null,
  "permissibleSportIds": null,
  "permissibleSports": null,
  "activityCountLast180Days": null,
  "createdBy": null,
} satisfies AdminUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


