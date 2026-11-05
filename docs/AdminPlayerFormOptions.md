
# AdminPlayerFormOptions


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;IdName&gt;](IdName.md)
`sports` | [Array&lt;IdName&gt;](IdName.md)
`eligibleOptions` | Array&lt;string&gt;
`yearOptions` | Array&lt;number&gt;

## Example

```typescript
import type { AdminPlayerFormOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "sports": null,
  "eligibleOptions": null,
  "yearOptions": null,
} satisfies AdminPlayerFormOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerFormOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


