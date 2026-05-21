
# AthleticProfileShowPermissions


## Properties

Name | Type
------------ | -------------
`canSeePersonnel` | boolean
`canSeeCompensation` | boolean
`canSeeFinancials` | boolean
`canSeeDeals` | boolean
`canSeeGuarantees` | boolean
`canShowSchedule` | boolean

## Example

```typescript
import type { AthleticProfileShowPermissions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "canSeePersonnel": null,
  "canSeeCompensation": null,
  "canSeeFinancials": null,
  "canSeeDeals": null,
  "canSeeGuarantees": null,
  "canShowSchedule": null,
} satisfies AthleticProfileShowPermissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AthleticProfileShowPermissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


