
# ContactSearchCoachOptions


## Properties

Name | Type
------------ | -------------
`schoolName` | string
`coaches` | [Array&lt;ContactSearchCoachOptionsCoachesInner&gt;](ContactSearchCoachOptionsCoachesInner.md)
`sports` | [Array&lt;ContactSearchCoachOptionsSportsInner&gt;](ContactSearchCoachOptionsSportsInner.md)

## Example

```typescript
import type { ContactSearchCoachOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolName": Duke University,
  "coaches": null,
  "sports": null,
} satisfies ContactSearchCoachOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactSearchCoachOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


