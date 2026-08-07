
# DepartmentOverviewPrivateSpend


## Properties

Name | Type
------------ | -------------
`amountCents` | number
`year` | number
`basis` | string
`rankWithheld` | boolean

## Example

```typescript
import type { DepartmentOverviewPrivateSpend } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "amountCents": null,
  "year": null,
  "basis": null,
  "rankWithheld": null,
} satisfies DepartmentOverviewPrivateSpend

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewPrivateSpend
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


