
# CoachProfileOverview


## Properties

Name | Type
------------ | -------------
`compensations` | [Array&lt;CoachCompensationEntry&gt;](CoachCompensationEntry.md)
`totalCompensations` | number
`positionsBySport` | { [key: string]: Array&lt;CoachPositionEntry&gt;; }
`totalPositions` | number
`conferencePositionsBySport` | { [key: string]: Array&lt;ConferencePositionEntry&gt;; }
`snapshot` | [CoachSnapshot](CoachSnapshot.md)
`videos` | [Array&lt;CoachVideoEntry&gt;](CoachVideoEntry.md)
`canSeeCompensation` | boolean
`canSeeVideos` | boolean

## Example

```typescript
import type { CoachProfileOverview } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "compensations": null,
  "totalCompensations": null,
  "positionsBySport": null,
  "totalPositions": null,
  "conferencePositionsBySport": null,
  "snapshot": null,
  "videos": null,
  "canSeeCompensation": null,
  "canSeeVideos": null,
} satisfies CoachProfileOverview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachProfileOverview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


