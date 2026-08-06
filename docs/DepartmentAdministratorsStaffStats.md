
# DepartmentAdministratorsStaffStats

Percentiles over the filed annual amounts, PERCENTILE_CONT interpolation; null when comp is withheld or nothing is filed

## Properties

Name | Type
------------ | -------------
`withCompCount` | number
`medianCents` | number
`p25Cents` | number
`p75Cents` | number
`meanCents` | number
`estimated` | boolean

## Example

```typescript
import type { DepartmentAdministratorsStaffStats } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "withCompCount": null,
  "medianCents": null,
  "p25Cents": null,
  "p75Cents": null,
  "meanCents": null,
  "estimated": null,
} satisfies DepartmentAdministratorsStaffStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsStaffStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


