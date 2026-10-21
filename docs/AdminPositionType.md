
# AdminPositionType


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string
`ord` | number
`groupStub` | boolean
`forceDisplayTitle` | boolean
`intercollegiateOnly` | boolean
`visible` | boolean
`positionTypeGroupId` | number
`positionTypeCategoryId` | number
`positionsCount` | number
`positionTypeGroup` | [AdminPositionTypeGroupSummary](AdminPositionTypeGroupSummary.md)
`positionTypeCategory` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminPositionType } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameDisplay": null,
  "ord": null,
  "groupStub": null,
  "forceDisplayTitle": null,
  "intercollegiateOnly": null,
  "visible": null,
  "positionTypeGroupId": null,
  "positionTypeCategoryId": null,
  "positionsCount": null,
  "positionTypeGroup": null,
  "positionTypeCategory": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminPositionType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPositionType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


