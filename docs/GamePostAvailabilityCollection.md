
# GamePostAvailabilityCollection


## Properties

Name | Type
------------ | -------------
`sportName` | string
`totalActive` | number
`groups` | [Array&lt;GamePostAvailabilityCollectionGroupsInner&gt;](GamePostAvailabilityCollectionGroupsInner.md)

## Example

```typescript
import type { GamePostAvailabilityCollection } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportName": null,
  "totalActive": null,
  "groups": null,
} satisfies GamePostAvailabilityCollection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostAvailabilityCollection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


