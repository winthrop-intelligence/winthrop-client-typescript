
# GetDealVerifications200ResponseMeta


## Properties

Name | Type
------------ | -------------
`currentPage` | number
`totalPages` | number
`totalEntries` | number
`nextPage` | number
`previousPage` | number
`verified` | boolean

## Example

```typescript
import type { GetDealVerifications200ResponseMeta } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "currentPage": 2,
  "totalPages": 7,
  "totalEntries": 654,
  "nextPage": 3,
  "previousPage": 1,
  "verified": null,
} satisfies GetDealVerifications200ResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDealVerifications200ResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


