
# AdminConferenceSchoolDirectoryRow


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`schoolStatus` | string
`_private` | boolean
`allowsFoia` | boolean
`costOfLivingIndexCityCode` | string
`primaryConferenceName` | string
`divisionName` | string
`subdivisions` | [Array&lt;AdminCompensationListMetaContractStatusOptionsInner&gt;](AdminCompensationListMetaContractStatusOptionsInner.md)

## Example

```typescript
import type { AdminConferenceSchoolDirectoryRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "schoolStatus": null,
  "_private": null,
  "allowsFoia": null,
  "costOfLivingIndexCityCode": null,
  "primaryConferenceName": null,
  "divisionName": null,
  "subdivisions": null,
} satisfies AdminConferenceSchoolDirectoryRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminConferenceSchoolDirectoryRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


