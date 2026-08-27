
# Filters

Request body for the legacy coach search endpoint.

## Properties

Name | Type
------------ | -------------
`priorityIds` | Array&lt;number&gt;
`page` | number
`perPage` | number
`q` | { [key: string]: any; }

## Example

```typescript
import type { Filters } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "priorityIds": null,
  "page": null,
  "perPage": null,
  "q": null,
} satisfies Filters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Filters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


