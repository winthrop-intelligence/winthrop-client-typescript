
# AdminContractRequestSearches


## Properties

Name | Type
------------ | -------------
`positionId` | number
`coachId` | number
`coachFirstName` | string
`coachLastName` | string
`coachFriendlyId` | string
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`sportId` | number
`sportName` | string
`seasonYear` | number
`positionTitle` | string
`positionTypeNames` | Array&lt;string&gt;
`compensationContractStatusId` | number
`compContractStatus` | string
`incomeReportContractStatusId` | number
`oiContractStatus` | string
`contractVerified` | boolean
`departing` | boolean

## Example

```typescript
import type { AdminContractRequestSearches } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "positionId": null,
  "coachId": null,
  "coachFirstName": null,
  "coachLastName": null,
  "coachFriendlyId": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "sportId": null,
  "sportName": null,
  "seasonYear": null,
  "positionTitle": null,
  "positionTypeNames": null,
  "compensationContractStatusId": null,
  "compContractStatus": null,
  "incomeReportContractStatusId": null,
  "oiContractStatus": null,
  "contractVerified": null,
  "departing": null,
} satisfies AdminContractRequestSearches

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContractRequestSearches
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


