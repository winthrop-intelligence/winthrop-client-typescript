
# FoiaLabel


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`archived` | boolean

## Example

```typescript
import type { FoiaLabel } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": August Coaches 2015,
  "archived": false,
} satisfies FoiaLabel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaLabel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


