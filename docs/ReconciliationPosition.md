
# ReconciliationPosition


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`seasonId` | number
`seasonYear` | number
`schoolId` | number
`sportId` | number
`title` | string
`departing` | boolean
`positionTypeIds` | Array&lt;number&gt;

## Example

```typescript
import type { ReconciliationPosition } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "seasonId": null,
  "seasonYear": null,
  "schoolId": null,
  "sportId": null,
  "title": null,
  "departing": null,
  "positionTypeIds": null,
} satisfies ReconciliationPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReconciliationPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


