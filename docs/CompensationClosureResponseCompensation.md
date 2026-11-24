
# CompensationClosureResponseCompensation


## Properties

Name | Type
------------ | -------------
`id` | number
`contractStatus` | string
`comment` | string
`positions` | [Array&lt;CompensationClosureResponseCompensationPositionsInner&gt;](CompensationClosureResponseCompensationPositionsInner.md)

## Example

```typescript
import type { CompensationClosureResponseCompensation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "contractStatus": null,
  "comment": null,
  "positions": null,
} satisfies CompensationClosureResponseCompensation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationClosureResponseCompensation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


