
# DepartmentFinancialsEadaRole


## Properties

Name | Type
------------ | -------------
`men` | [DepartmentFinancialsEadaCategory](DepartmentFinancialsEadaCategory.md)
`women` | [DepartmentFinancialsEadaCategory](DepartmentFinancialsEadaCategory.md)
`coed` | [DepartmentFinancialsEadaCategory](DepartmentFinancialsEadaCategory.md)

## Example

```typescript
import type { DepartmentFinancialsEadaRole } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "men": null,
  "women": null,
  "coed": null,
} satisfies DepartmentFinancialsEadaRole

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsEadaRole
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


