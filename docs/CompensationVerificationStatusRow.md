
# CompensationVerificationStatusRow


## Properties

Name | Type
------------ | -------------
`compensationId` | number
`coachId` | number
`positionId` | number
`positionType` | string
`schoolId` | number
`rawContractId` | number
`contractId` | number
`contractStatus` | string
`atWill` | boolean
`status` | [CompensationVerificationStatusValue](CompensationVerificationStatusValue.md)
`verificationEventId` | number
`method` | string
`verifiedAt` | Date
`agentRunId` | string
`changedSince` | [Array&lt;CompensationVerificationChange&gt;](CompensationVerificationChange.md)

## Example

```typescript
import type { CompensationVerificationStatusRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "compensationId": null,
  "coachId": null,
  "positionId": null,
  "positionType": null,
  "schoolId": null,
  "rawContractId": null,
  "contractId": null,
  "contractStatus": null,
  "atWill": null,
  "status": null,
  "verificationEventId": null,
  "method": null,
  "verifiedAt": null,
  "agentRunId": null,
  "changedSince": null,
} satisfies CompensationVerificationStatusRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationVerificationStatusRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


