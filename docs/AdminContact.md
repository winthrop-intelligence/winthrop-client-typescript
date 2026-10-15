
# AdminContact


## Properties

Name | Type
------------ | -------------
`id` | number
`school` | [IdName](IdName.md)
`sport` | [AdminContactSport](AdminContactSport.md)
`coach` | [IdName](IdName.md)
`verifiedSchedulingContact` | boolean
`verifiedAt` | Date
`latestPositions` | [Array&lt;AdminContactLatestPositionsInner&gt;](AdminContactLatestPositionsInner.md)

## Example

```typescript
import type { AdminContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "school": null,
  "sport": null,
  "coach": null,
  "verifiedSchedulingContact": null,
  "verifiedAt": null,
  "latestPositions": null,
} satisfies AdminContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


