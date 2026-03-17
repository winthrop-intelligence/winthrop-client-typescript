
# CoachCompensationTabCompensationsInner


## Properties

Name | Type
------------ | -------------
`yearStr` | string
`schoolName` | string
`schoolId` | number
`positionSport` | string
`totalCents` | number
`baseSalaryCents` | number
`talentFeeCents` | number
`deferredCompCents` | number
`compensationType` | string
`mediaLink` | string
`rawContractId` | number
`notes` | string

## Example

```typescript
import type { CoachCompensationTabCompensationsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "yearStr": null,
  "schoolName": null,
  "schoolId": null,
  "positionSport": null,
  "totalCents": null,
  "baseSalaryCents": null,
  "talentFeeCents": null,
  "deferredCompCents": null,
  "compensationType": null,
  "mediaLink": null,
  "rawContractId": null,
  "notes": null,
} satisfies CoachCompensationTabCompensationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachCompensationTabCompensationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


