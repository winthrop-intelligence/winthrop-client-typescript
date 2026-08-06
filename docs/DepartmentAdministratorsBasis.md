
# DepartmentAdministratorsBasis


## Properties

Name | Type
------------ | -------------
`seasonYear` | number
`staffCount` | number
`withCompCount` | number
`filed990Count` | number
`hourlyExcludedCount` | number
`compVisible` | boolean
`compFiscalYear` | number

## Example

```typescript
import type { DepartmentAdministratorsBasis } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "seasonYear": null,
  "staffCount": null,
  "withCompCount": null,
  "filed990Count": null,
  "hourlyExcludedCount": null,
  "compVisible": null,
  "compFiscalYear": null,
} satisfies DepartmentAdministratorsBasis

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsBasis
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


