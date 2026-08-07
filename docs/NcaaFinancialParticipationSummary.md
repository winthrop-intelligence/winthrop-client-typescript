
# NcaaFinancialParticipationSummary


## Properties

Name | Type
------------ | -------------
`rawContractId` | number
`gender` | string
`totalParticipants` | number
`secondTeamParticipants` | number
`thirdTeamParticipants` | number
`unduplicatedParticipants` | number
`participantProportion` | string

## Example

```typescript
import type { NcaaFinancialParticipationSummary } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "rawContractId": null,
  "gender": null,
  "totalParticipants": null,
  "secondTeamParticipants": null,
  "thirdTeamParticipants": null,
  "unduplicatedParticipants": null,
  "participantProportion": null,
} satisfies NcaaFinancialParticipationSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NcaaFinancialParticipationSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


