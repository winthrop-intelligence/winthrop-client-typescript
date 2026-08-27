
# AthleticProfileShowDealsInner


## Properties

Name | Type
------------ | -------------
`id` | number
`dealType` | string
`term` | string
`vendorNames` | string
`vendors` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`summary` | string
`hasContract` | boolean
`rawContractId` | number

## Example

```typescript
import type { AthleticProfileShowDealsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dealType": null,
  "term": null,
  "vendorNames": null,
  "vendors": null,
  "summary": null,
  "hasContract": null,
  "rawContractId": null,
} satisfies AthleticProfileShowDealsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowDealsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


