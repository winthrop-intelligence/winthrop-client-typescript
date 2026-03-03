
# GetLadFilterOptions200Response


## Properties

Name | Type
------------ | -------------
`positionTypes` | [Array&lt;IdName&gt;](IdName.md)
`departments` | [Array&lt;IdName&gt;](IdName.md)
`schoolGroups` | [Array&lt;IdName&gt;](IdName.md)

## Example

```typescript
import type { GetLadFilterOptions200Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "positionTypes": null,
  "departments": null,
  "schoolGroups": null,
} satisfies GetLadFilterOptions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetLadFilterOptions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


