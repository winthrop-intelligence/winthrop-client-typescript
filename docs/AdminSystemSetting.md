
# AdminSystemSetting


## Properties

Name | Type
------------ | -------------
`id` | number
`mostRecentAprYear` | number
`currentSeasonYear` | number
`previousSeasonYear` | number
`currentFinancialsSeasonYear` | number
`previousFinancialsSeasonYear` | number
`schedulingTargetYear` | number
`loginNote` | string
`d1ProjectedChurn` | number
`d2ProjectedChurn` | number
`d1PriceDollars` | string
`d2PriceDollars` | string
`d2PlusPriceDollars` | string
`coachesAndAdministratorsPriceDollars` | string
`licenseAgreement` | [AdminSystemSettingLicenseAgreement](AdminSystemSettingLicenseAgreement.md)
`updatedAt` | Date

## Example

```typescript
import type { AdminSystemSetting } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mostRecentAprYear": null,
  "currentSeasonYear": null,
  "previousSeasonYear": null,
  "currentFinancialsSeasonYear": null,
  "previousFinancialsSeasonYear": null,
  "schedulingTargetYear": null,
  "loginNote": null,
  "d1ProjectedChurn": null,
  "d2ProjectedChurn": null,
  "d1PriceDollars": null,
  "d2PriceDollars": null,
  "d2PlusPriceDollars": null,
  "coachesAndAdministratorsPriceDollars": null,
  "licenseAgreement": null,
  "updatedAt": null,
} satisfies AdminSystemSetting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSystemSetting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


