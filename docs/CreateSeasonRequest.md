
# CreateSeasonRequest


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`sportId` | number
`year` | number
`changeNote` | string

## Example

```typescript
import type { CreateSeasonRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "sportId": null,
  "year": null,
  "changeNote": null,
} satisfies CreateSeasonRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSeasonRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


