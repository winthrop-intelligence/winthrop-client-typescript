
# FilterPositionType

A position type with optional group stub flag

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`groupStub` | boolean
`category` | string

## Example

```typescript
import type { FilterPositionType } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "groupStub": null,
  "category": null,
} satisfies FilterPositionType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilterPositionType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


