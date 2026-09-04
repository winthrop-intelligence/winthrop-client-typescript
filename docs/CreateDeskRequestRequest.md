
# CreateDeskRequestRequest


## Properties

Name | Type
------------ | -------------
`body` | string
`category` | string
`sourceReportUuid` | string
`ctaKey` | string

## Example

```typescript
import type { CreateDeskRequestRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "body": null,
  "category": null,
  "sourceReportUuid": null,
  "ctaKey": null,
} satisfies CreateDeskRequestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDeskRequestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


