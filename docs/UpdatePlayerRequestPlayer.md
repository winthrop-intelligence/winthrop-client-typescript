
# UpdatePlayerRequestPlayer


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`externalCode` | string
`height` | number
`weight` | number

## Example

```typescript
import type { UpdatePlayerRequestPlayer } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "externalCode": null,
  "height": null,
  "weight": null,
} satisfies UpdatePlayerRequestPlayer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePlayerRequestPlayer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


