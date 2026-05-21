
# UpdateGamePostSearchRequestGamePost


## Properties

Name | Type
------------ | -------------
`status` | string
`expiresOn` | Date
`sportId` | number
`startDate` | Date
`endDate` | Date
`description` | string
`gameTypeIds` | Array&lt;number&gt;

## Example

```typescript
import type { UpdateGamePostSearchRequestGamePost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "expiresOn": null,
  "sportId": null,
  "startDate": null,
  "endDate": null,
  "description": null,
  "gameTypeIds": null,
} satisfies UpdateGamePostSearchRequestGamePost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateGamePostSearchRequestGamePost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


