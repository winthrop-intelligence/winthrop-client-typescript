
# FoiaInboxRequestableData


## Properties

Name | Type
------------ | -------------
`year` | number
`schoolId` | number
`coachId` | number
`contractStatus` | string
`comment` | string
`updatedAt` | Date
`positionsSha256` | string
`positions` | [Array&lt;FoiaInboxExpectedPosition&gt;](FoiaInboxExpectedPosition.md)

## Example

```typescript
import type { FoiaInboxRequestableData } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "schoolId": null,
  "coachId": null,
  "contractStatus": null,
  "comment": null,
  "updatedAt": null,
  "positionsSha256": null,
  "positions": null,
} satisfies FoiaInboxRequestableData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxRequestableData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


