
# DealDetailPosition

The position being filled (Executive Search only), with its title and the person holding it.

## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`person` | string

## Example

```typescript
import type { DealDetailPosition } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "person": null,
} satisfies DealDetailPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealDetailPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


