
# CreatePlayerRequest


## Properties

Name | Type
------------ | -------------
`player` | [CreatePlayerRequestPlayer](CreatePlayerRequestPlayer.md)

## Example

```typescript
import type { CreatePlayerRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "player": null,
} satisfies CreatePlayerRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePlayerRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


