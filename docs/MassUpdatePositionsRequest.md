
# MassUpdatePositionsRequest


## Properties

Name | Type
------------ | -------------
`coachId` | number
`positions` | [Array&lt;MassUpdatePositionRow&gt;](MassUpdatePositionRow.md)

## Example

```typescript
import type { MassUpdatePositionsRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "positions": null,
} satisfies MassUpdatePositionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassUpdatePositionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


