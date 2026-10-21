
# CreateAdminSchoolRequestSchool


## Properties

Name | Type
------------ | -------------
`name` | string
`shortName` | string
`anonName` | string
`youtubeSearchName` | string
`externalUrl` | string
`athleticsUrl` | string
`wikipediaUrl` | string
`athleticsInstagramHandle` | string
`externalInstagramHandle` | string
`athleticsTwitterHandle` | string
`externalTwitterHandle` | string
`address1` | string
`address2` | string
`city` | string
`zipCode` | string
`costOfLivingIndexCityCode` | string
`schoolStatus` | string
`athleticsWikipediaUrl` | string
`portalSite` | string
`portalPassword` | string
`carnegieId` | number
`ncaaId` | number
`ipedsUnitid` | number
`stateId` | number
`primaryConferenceId` | number
`schoolClassificationId` | number
`daysToReceiveRequest` | number
`_private` | boolean
`allowsFoia` | boolean
`lawyerSends` | boolean
`forms` | boolean
`sendOiReports` | boolean
`mail` | boolean
`subdivisionIds` | Array&lt;number&gt;
`logoImage` | Blob
`externalLogoImage` | Blob
`schoolAlternateNamesAttributes` | [Array&lt;CreateAdminSchoolRequestSchoolSchoolAlternateNamesAttributesInner&gt;](CreateAdminSchoolRequestSchoolSchoolAlternateNamesAttributesInner.md)

## Example

```typescript
import type { CreateAdminSchoolRequestSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "shortName": null,
  "anonName": null,
  "youtubeSearchName": null,
  "externalUrl": null,
  "athleticsUrl": null,
  "wikipediaUrl": null,
  "athleticsInstagramHandle": null,
  "externalInstagramHandle": null,
  "athleticsTwitterHandle": null,
  "externalTwitterHandle": null,
  "address1": null,
  "address2": null,
  "city": null,
  "zipCode": null,
  "costOfLivingIndexCityCode": null,
  "schoolStatus": null,
  "athleticsWikipediaUrl": null,
  "portalSite": null,
  "portalPassword": null,
  "carnegieId": null,
  "ncaaId": null,
  "ipedsUnitid": null,
  "stateId": null,
  "primaryConferenceId": null,
  "schoolClassificationId": null,
  "daysToReceiveRequest": null,
  "_private": null,
  "allowsFoia": null,
  "lawyerSends": null,
  "forms": null,
  "sendOiReports": null,
  "mail": null,
  "subdivisionIds": null,
  "logoImage": null,
  "externalLogoImage": null,
  "schoolAlternateNamesAttributes": null,
} satisfies CreateAdminSchoolRequestSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminSchoolRequestSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


