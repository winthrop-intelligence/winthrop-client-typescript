
# QuartilesData


## Properties

Name | Type
------------ | -------------
`title` | string
`sport` | string
`yearStr` | string
`coachCompCents` | number
`rows` | [Array&lt;QuartileRow&gt;](QuartileRow.md)

## Example

```typescript
import type { QuartilesData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "sport": null,
  "yearStr": null,
  "coachCompCents": null,
  "rows": null,
} satisfies QuartilesData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuartilesData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


