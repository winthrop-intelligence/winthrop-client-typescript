
# DeskActivityMetaSource


## Properties

Name | Type
------------ | -------------
`name` | string
`environment` | string
`cacheSeconds` | number
`coverage` | [DeskActivityMetaSourceCoverage](DeskActivityMetaSourceCoverage.md)
`limitations` | Array&lt;string&gt;

## Example

```typescript
import type { DeskActivityMetaSource } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "environment": null,
  "cacheSeconds": null,
  "coverage": null,
  "limitations": null,
} satisfies DeskActivityMetaSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskActivityMetaSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


