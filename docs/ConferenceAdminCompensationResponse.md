
# ConferenceAdminCompensationResponse


## Properties

Name | Type
------------ | -------------
`year` | number
`departments` | [Array&lt;IdName&gt;](IdName.md)
`leaderAdPositions` | [Array&lt;IdName&gt;](IdName.md)
`compensations` | [Array&lt;CompensationRow&gt;](CompensationRow.md)
`schoolsNoComp` | [Array&lt;SchoolNoComp&gt;](SchoolNoComp.md)
`schoolsNoSeason` | [Array&lt;SchoolNoSeason&gt;](SchoolNoSeason.md)
`subdivisions` | [Array&lt;AdminCompensationSubdivision&gt;](AdminCompensationSubdivision.md)

## Example

```typescript
import type { ConferenceAdminCompensationResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "departments": null,
  "leaderAdPositions": null,
  "compensations": null,
  "schoolsNoComp": null,
  "schoolsNoSeason": null,
  "subdivisions": null,
} satisfies ConferenceAdminCompensationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConferenceAdminCompensationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


