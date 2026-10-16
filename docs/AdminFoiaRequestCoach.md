
# AdminFoiaRequestCoach


## Properties

Name | Type
------------ | -------------
`coachId` | number
`coachName` | string
`schoolName` | string
`seasonYear` | number
`sportName` | string
`positionId` | number
`positionType` | string
`contract` | [AdminFoiaRequestCoachContract](AdminFoiaRequestCoachContract.md)
`compContractStatus` | string
`oiContractStatus` | string
`compensationId` | number
`compensationAttached` | boolean
`compensationRequestedItemId` | number
`incomeReportId` | number
`incomeReportAttached` | boolean
`incomeReportRequestedItemId` | number

## Example

```typescript
import type { AdminFoiaRequestCoach } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "coachName": null,
  "schoolName": null,
  "seasonYear": null,
  "sportName": null,
  "positionId": null,
  "positionType": null,
  "contract": null,
  "compContractStatus": null,
  "oiContractStatus": null,
  "compensationId": null,
  "compensationAttached": null,
  "compensationRequestedItemId": null,
  "incomeReportId": null,
  "incomeReportAttached": null,
  "incomeReportRequestedItemId": null,
} satisfies AdminFoiaRequestCoach

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestCoach
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


