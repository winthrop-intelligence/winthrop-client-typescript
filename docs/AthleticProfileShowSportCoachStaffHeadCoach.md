
# AthleticProfileShowSportCoachStaffHeadCoach


## Properties

Name | Type
------------ | -------------
`coachId` | number
`name` | string
`lastName` | string
`compCents` | number
`baseSalaryCents` | number
`compRank` | number
`compCohortSize` | number
`compMedianCents` | number
`contractStartOn` | Date
`contractEndOn` | Date
`contractOnFile` | boolean
`atWill` | boolean
`interim` | boolean
`firstSeasonYear` | number
`careerSeasonCount` | number
`yearOne` | [AthleticProfileShowSportCoachStaffHeadCoachYearOne](AthleticProfileShowSportCoachStaffHeadCoachYearOne.md)
`career` | [Array&lt;AthleticProfileShowSportCoachStaffHeadCoachCareerInner&gt;](AthleticProfileShowSportCoachStaffHeadCoachCareerInner.md)

## Example

```typescript
import type { AthleticProfileShowSportCoachStaffHeadCoach } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "name": null,
  "lastName": null,
  "compCents": null,
  "baseSalaryCents": null,
  "compRank": null,
  "compCohortSize": null,
  "compMedianCents": null,
  "contractStartOn": null,
  "contractEndOn": null,
  "contractOnFile": null,
  "atWill": null,
  "interim": null,
  "firstSeasonYear": null,
  "careerSeasonCount": null,
  "yearOne": null,
  "career": null,
} satisfies AthleticProfileShowSportCoachStaffHeadCoach

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowSportCoachStaffHeadCoach
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


