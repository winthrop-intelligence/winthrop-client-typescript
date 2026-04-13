
# RawContractDealInfo


## Properties

Name | Type
------------ | -------------
`dealId` | number
`schoolName` | string
`schoolId` | number
`vendorName` | string
`vendors` | [Array&lt;RawContractDealInfoVendorsInner&gt;](RawContractDealInfoVendorsInner.md)
`dealTypeName` | string
`startYear` | number
`endYear` | number
`startAt` | Date
`endAt` | Date
`signed` | string
`active` | boolean
`archived` | boolean
`autorenew` | boolean
`summary` | string
`termYears` | number

## Example

```typescript
import type { RawContractDealInfo } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "dealId": null,
  "schoolName": null,
  "schoolId": null,
  "vendorName": null,
  "vendors": null,
  "dealTypeName": null,
  "startYear": null,
  "endYear": null,
  "startAt": null,
  "endAt": null,
  "signed": null,
  "active": null,
  "archived": null,
  "autorenew": null,
  "summary": null,
  "termYears": null,
} satisfies RawContractDealInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawContractDealInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


