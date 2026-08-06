
# DepartmentAdministratorsAdOffice


## Properties

Name | Type
------------ | -------------
`ad` | [DepartmentAdministratorsAdSeat](DepartmentAdministratorsAdSeat.md)
`deputies` | [Array&lt;DepartmentAdministratorStaffRow&gt;](DepartmentAdministratorStaffRow.md)

## Example

```typescript
import type { DepartmentAdministratorsAdOffice } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "ad": null,
  "deputies": null,
} satisfies DepartmentAdministratorsAdOffice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentAdministratorsAdOffice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


