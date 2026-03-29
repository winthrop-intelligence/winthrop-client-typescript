
# AthleticProfileShow


## Properties

Name | Type
------------ | -------------
`school` | [AthleticProfileShowSchool](AthleticProfileShowSchool.md)
`financialInfo` | [AthleticProfileShowFinancialInfo](AthleticProfileShowFinancialInfo.md)
`sportKey` | string
`sportName` | string
`year` | number
`tabSports` | [Array&lt;AthleticProfileShowTabSportsInner&gt;](AthleticProfileShowTabSportsInner.md)
`nonRevenueSports` | [Array&lt;AthleticProfileShowTabSportsInner&gt;](AthleticProfileShowTabSportsInner.md)
`permissions` | [AthleticProfileShowPermissions](AthleticProfileShowPermissions.md)
`sportsOverview` | [Array&lt;AthleticProfileShowSportsOverviewInner&gt;](AthleticProfileShowSportsOverviewInner.md)
`sponsoredCount` | number
`personnel` | [Array&lt;AthleticProfileShowPersonnelInner&gt;](AthleticProfileShowPersonnelInner.md)
`personnelTotalCount` | number
`financials` | [AthleticProfileShowFinancials](AthleticProfileShowFinancials.md)
`deals` | [Array&lt;AthleticProfileShowDealsInner&gt;](AthleticProfileShowDealsInner.md)
`guarantees` | [Array&lt;AthleticProfileShowGuaranteesInner&gt;](AthleticProfileShowGuaranteesInner.md)
`guaranteesTotalCount` | number
`games` | [Array&lt;AthleticProfileShowGamesInner&gt;](AthleticProfileShowGamesInner.md)

## Example

```typescript
import type { AthleticProfileShow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "school": null,
  "financialInfo": null,
  "sportKey": null,
  "sportName": null,
  "year": null,
  "tabSports": null,
  "nonRevenueSports": null,
  "permissions": null,
  "sportsOverview": null,
  "sponsoredCount": null,
  "personnel": null,
  "personnelTotalCount": null,
  "financials": null,
  "deals": null,
  "guarantees": null,
  "guaranteesTotalCount": null,
  "games": null,
} satisfies AthleticProfileShow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


