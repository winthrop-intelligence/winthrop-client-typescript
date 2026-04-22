
# CreateGamePostSearchRequestGamePost


## Properties

Name | Type
------------ | -------------
`sportId` | number
`startDate` | Date
`endDate` | Date
`description` | string
`gameTypeIds` | Array&lt;number&gt;

## Example

```typescript
import type { CreateGamePostSearchRequestGamePost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportId": null,
  "startDate": null,
  "endDate": null,
  "description": null,
  "gameTypeIds": null,
} satisfies CreateGamePostSearchRequestGamePost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGamePostSearchRequestGamePost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


