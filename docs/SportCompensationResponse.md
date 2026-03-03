
# SportCompensationResponse


## Properties

Name | Type
------------ | -------------
`year` | number
`sportName` | string
`compensations` | [Array&lt;CompensationRow&gt;](CompensationRow.md)
`schoolsNoComp` | [Array&lt;SchoolNoComp&gt;](SchoolNoComp.md)
`schoolsNoSeason` | [Array&lt;SchoolNoSeason&gt;](SchoolNoSeason.md)
`assistantCoaches` | [Array&lt;AsstCoachSchool&gt;](AsstCoachSchool.md)
`subdivisions` | [Array&lt;SportCompensationSubdivision&gt;](SportCompensationSubdivision.md)
`rankings` | [SportCompensationRankings](SportCompensationRankings.md)

## Example

```typescript
import type { SportCompensationResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "sportName": null,
  "compensations": null,
  "schoolsNoComp": null,
  "schoolsNoSeason": null,
  "assistantCoaches": null,
  "subdivisions": null,
  "rankings": null,
} satisfies SportCompensationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SportCompensationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


