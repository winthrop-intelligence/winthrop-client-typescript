
# State

A US state. Returned by /filter_options/states.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string

## Example

```typescript
import type { State } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": Texas,
  "nameDisplay": TX,
} satisfies State

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as State
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


