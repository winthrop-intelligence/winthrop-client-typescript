
# AdminCompensationSubdivision


## Properties

Name | Type
------------ | -------------
`name` | string
`compensations` | [Array&lt;CompensationRow&gt;](CompensationRow.md)
`schoolsNoComp` | [Array&lt;SchoolNoComp&gt;](SchoolNoComp.md)

## Example

```typescript
import type { AdminCompensationSubdivision } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "compensations": null,
  "schoolsNoComp": null,
} satisfies AdminCompensationSubdivision

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensationSubdivision
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


