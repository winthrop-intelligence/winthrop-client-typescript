
# ScraperArgDef


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`description` | string

## Example

```typescript
import type { ScraperArgDef } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": season_year,
  "type": integer,
  "description": The year of the season to scrape,
} satisfies ScraperArgDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScraperArgDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


