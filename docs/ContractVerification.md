
# ContractVerification


## Properties

Name | Type
------------ | -------------
`seasons` | Array&lt;number&gt;
`verifiedAt` | Date
`result` | string
`method` | string
`agentRunId` | string
`evidenceUrl` | string
`id` | number
`contractId` | number
`rawContractId` | number
`coachId` | number
`verifiedById` | number
`createdAt` | Date

## Example

```typescript
import type { ContractVerification } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasons": null,
  "verifiedAt": null,
  "result": null,
  "method": null,
  "agentRunId": null,
  "evidenceUrl": null,
  "id": null,
  "contractId": null,
  "rawContractId": null,
  "coachId": null,
  "verifiedById": null,
  "createdAt": null,
} satisfies ContractVerification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContractVerification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


