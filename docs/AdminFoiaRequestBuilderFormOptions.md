
# AdminFoiaRequestBuilderFormOptions

Selectable schools/sports/compensation options for the FOIA Request Builder form

## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;IdName&gt;](IdName.md)
`sports` | [Array&lt;IdName&gt;](IdName.md)

## Example

```typescript
import type { AdminFoiaRequestBuilderFormOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "sports": null,
} satisfies AdminFoiaRequestBuilderFormOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestBuilderFormOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


