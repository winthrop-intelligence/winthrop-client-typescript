
# CompensationComparisonRow

One school/match candidate. Compensation and contract fields are only present when the caller\'s permissions allow them (comp_status is comp_redacted otherwise). Synthesized no_role_match / school_not_accessible rows carry null person fields.

## Properties

Name | Type
------------ | -------------
`ref` | string
`source` | string
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`coachId` | number
`coachFriendlyId` | string
`coachName` | string
`rawTitle` | string
`positionTypes` | Array&lt;string&gt;
`sportName` | string
`year` | number
`matchType` | string
`matchNotes` | string
`compStatus` | string
`compensationCents` | number
`baseSalaryCents` | number
`talentFeeCents` | number
`oneTimeBonusCents` | number
`outsideIncomeCents` | number
`deferredCompCents` | number
`compensationType` | string
`contractStartsOn` | Date
`contractExpiresOn` | Date
`rawContractId` | number

## Example

```typescript
import type { CompensationComparisonRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "ref": coach:42,
  "source": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "coachId": null,
  "coachFriendlyId": null,
  "coachName": null,
  "rawTitle": null,
  "positionTypes": null,
  "sportName": null,
  "year": null,
  "matchType": null,
  "matchNotes": null,
  "compStatus": null,
  "compensationCents": null,
  "baseSalaryCents": null,
  "talentFeeCents": null,
  "oneTimeBonusCents": null,
  "outsideIncomeCents": null,
  "deferredCompCents": null,
  "compensationType": null,
  "contractStartsOn": null,
  "contractExpiresOn": null,
  "rawContractId": null,
} satisfies CompensationComparisonRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationComparisonRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


