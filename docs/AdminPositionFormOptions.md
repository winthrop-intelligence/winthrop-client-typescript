
# AdminPositionFormOptions


## Properties

Name | Type
------------ | -------------
`year` | number
`years` | [Array&lt;AdminPositionFormOption&gt;](AdminPositionFormOption.md)
`schools` | [Array&lt;AdminPositionFormOption&gt;](AdminPositionFormOption.md)
`sports` | [Array&lt;AdminPositionFormOption&gt;](AdminPositionFormOption.md)
`positionTypes` | [Array&lt;AdminPositionFormOption&gt;](AdminPositionFormOption.md)
`seasons` | [Array&lt;AdminPositionFormOption&gt;](AdminPositionFormOption.md)
`creationReasons` | [Array&lt;AdminPositionFormOptionsCreationReasonsInner&gt;](AdminPositionFormOptionsCreationReasonsInner.md)

## Example

```typescript
import type { AdminPositionFormOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "years": null,
  "schools": null,
  "sports": null,
  "positionTypes": null,
  "seasons": null,
  "creationReasons": null,
} satisfies AdminPositionFormOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPositionFormOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


