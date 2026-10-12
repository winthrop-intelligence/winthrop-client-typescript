
# EarnedIncentive


## Properties

Name | Type
------------ | -------------
`coachId` | number
`rawContractId` | number
`seasonId` | number
`itemId` | string
`kind` | string
`provisionQuote` | string
`status` | string
`amountCents` | number
`potentialAmountCents` | number
`effectiveFrom` | Date
`effectiveThrough` | Date
`endedByContractId` | number
`termChange` | [EarnedIncentiveFieldsTermChange](EarnedIncentiveFieldsTermChange.md)
`missingFact` | string
`rationale` | string
`resultIds` | Array&lt;number&gt;
`inputId` | string
`coverage` | string
`missingDocuments` | Array&lt;string&gt;
`verificationMethod` | string
`approvedById` | number
`approvedAt` | Date
`id` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EarnedIncentive } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": 2101507064,
  "rawContractId": 3,
  "seasonId": 4,
  "itemId": mvc-tournament-champion,
  "kind": null,
  "provisionQuote": MVC Tournament Champion ... $25,000,
  "status": null,
  "amountCents": 2500000,
  "potentialAmountCents": 2500000,
  "effectiveFrom": Sat Jul 01 00:00:00 UTC 2023,
  "effectiveThrough": Wed Jun 30 00:00:00 UTC 2027,
  "endedByContractId": null,
  "termChange": null,
  "missingFact": school-only: team GPA for 2024-25,
  "rationale": won MVC tournament (seed 2),
  "resultIds": [11, 12],
  "inputId": sha256:9f2c...,
  "coverage": null,
  "missingDocuments": [Exhibit A - Incentive Schedule],
  "verificationMethod": null,
  "approvedById": null,
  "approvedAt": 2026-10-09T19:00Z,
  "id": 1,
  "createdAt": null,
  "updatedAt": null,
} satisfies EarnedIncentive

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EarnedIncentive
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


