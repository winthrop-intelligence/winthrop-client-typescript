
# MassDepartPositionsResponse


## Properties

Name | Type
------------ | -------------
`departedIds` | Array&lt;number&gt;
`failed` | [Array&lt;MassDepartPositionFailure&gt;](MassDepartPositionFailure.md)

## Example

```typescript
import type { MassDepartPositionsResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "departedIds": null,
  "failed": null,
} satisfies MassDepartPositionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MassDepartPositionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


