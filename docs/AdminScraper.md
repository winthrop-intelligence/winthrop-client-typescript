
# AdminScraper


## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`description` | string
`argumentDefs` | [Array&lt;AdminScraperArgumentDef&gt;](AdminScraperArgumentDef.md)

## Example

```typescript
import type { AdminScraper } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "title": null,
  "description": null,
  "argumentDefs": null,
} satisfies AdminScraper

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminScraper
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


