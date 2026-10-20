
# AdminSchoolDetail


## Properties

Name | Type
------------ | -------------
`currentSeasonYear` | number
`financialReports` | [Array&lt;AdminSchoolDetailFinancialReportsInner&gt;](AdminSchoolDetailFinancialReportsInner.md)
`vendorStatusOptions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)
`vendorStatuses` | [Array&lt;AdminSchoolDetailVendorStatusesInner&gt;](AdminSchoolDetailVendorStatusesInner.md)
`id` | number
`name` | string
`_private` | boolean
`allowsFoia` | boolean
`shortName` | string
`anonName` | string
`youtubeSearchName` | string
`externalUrl` | string
`carnegieId` | string
`ipedsUnitid` | number
`ncaaId` | string
`athleticsUrl` | string
`wikipediaUrl` | string
`athleticsInstagramHandle` | string
`externalInstagramHandle` | string
`athleticsTwitterHandle` | string
`externalTwitterHandle` | string
`address1` | string
`address2` | string
`city` | string
`stateId` | number
`zipCode` | string
`costOfLivingIndexCityCode` | string
`primaryConferenceId` | number
`schoolClassificationId` | number
`schoolStatus` | string
`athleticsWikipediaUrl` | string
`daysToReceiveRequest` | number
`lawyerSends` | boolean
`forms` | string
`sendOiReports` | boolean
`mail` | string
`portalSite` | string
`portalPassword` | string
`createdAt` | Date
`updatedAt` | Date
`logoImageUrl` | string
`externalLogoImageUrl` | string
`state` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`primaryConference` | [AdminConferenceDivision](AdminConferenceDivision.md)
`division` | [AdminCoachHometownState](AdminCoachHometownState.md)
`schoolClassification` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`subdivisions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)
`subdivisionIds` | Array&lt;number&gt;
`schoolAlternateNames` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`mens` | [Array&lt;AdminSchoolSportRow&gt;](AdminSchoolSportRow.md)
`womens` | [Array&lt;AdminSchoolSportRow&gt;](AdminSchoolSportRow.md)
`bothGender` | [Array&lt;AdminSchoolSportRow&gt;](AdminSchoolSportRow.md)

## Example

```typescript
import type { AdminSchoolDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "currentSeasonYear": null,
  "financialReports": null,
  "vendorStatusOptions": null,
  "vendorStatuses": null,
  "id": null,
  "name": null,
  "_private": null,
  "allowsFoia": null,
  "shortName": null,
  "anonName": null,
  "youtubeSearchName": null,
  "externalUrl": null,
  "carnegieId": null,
  "ipedsUnitid": null,
  "ncaaId": null,
  "athleticsUrl": null,
  "wikipediaUrl": null,
  "athleticsInstagramHandle": null,
  "externalInstagramHandle": null,
  "athleticsTwitterHandle": null,
  "externalTwitterHandle": null,
  "address1": null,
  "address2": null,
  "city": null,
  "stateId": null,
  "zipCode": null,
  "costOfLivingIndexCityCode": null,
  "primaryConferenceId": null,
  "schoolClassificationId": null,
  "schoolStatus": null,
  "athleticsWikipediaUrl": null,
  "daysToReceiveRequest": null,
  "lawyerSends": null,
  "forms": null,
  "sendOiReports": null,
  "mail": null,
  "portalSite": null,
  "portalPassword": null,
  "createdAt": null,
  "updatedAt": null,
  "logoImageUrl": null,
  "externalLogoImageUrl": null,
  "state": null,
  "primaryConference": null,
  "division": null,
  "schoolClassification": null,
  "subdivisions": null,
  "subdivisionIds": null,
  "schoolAlternateNames": null,
  "mens": null,
  "womens": null,
  "bothGender": null,
} satisfies AdminSchoolDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


