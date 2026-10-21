
# AdminSchoolNamesList


## Properties

Name | Type
------------ | -------------
`meta` | [AdminCoachContractsQcListMeta](AdminCoachContractsQcListMeta.md)
`data` | [Array&lt;AdminSchoolName&gt;](AdminSchoolName.md)

## Example

```typescript
import type { AdminSchoolNamesList } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies AdminSchoolNamesList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSchoolNamesList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


