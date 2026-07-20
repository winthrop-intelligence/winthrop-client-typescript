
# CreateJobJson

JSON body for pull-based sources (Google Drive).

## Properties

Name | Type
------------ | -------------
`source` | [JobSource](JobSource.md)
`profile` | string
`options` | [JobOptions](JobOptions.md)

## Example

```typescript
import type { CreateJobJson } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "source": null,
  "profile": null,
  "options": null,
} satisfies CreateJobJson

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateJobJson
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


