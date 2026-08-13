
# SalarySiteAssociationsResponse


## Properties

Name | Type
------------ | -------------
`meta` | [SalarySiteAssociationsMeta](SalarySiteAssociationsMeta.md)
`data` | [Array&lt;SalarySiteAssociation&gt;](SalarySiteAssociation.md)

## Example

```typescript
import type { SalarySiteAssociationsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies SalarySiteAssociationsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SalarySiteAssociationsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


