
# PageResult


## Properties

Name | Type
------------ | -------------
`pageNumber` | number
`status` | string
`text` | string
`textSha256` | string
`confidence` | number
`engine` | string
`trail` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { PageResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "pageNumber": null,
  "status": null,
  "text": null,
  "textSha256": null,
  "confidence": null,
  "engine": null,
  "trail": null,
} satisfies PageResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


