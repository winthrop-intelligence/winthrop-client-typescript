
# CreatePositionTypeRequestPositionType


## Properties

Name | Type
------------ | -------------
`name` | string
`nameDisplay` | string
`ord` | number
`positionTypeGroupId` | number
`groupStub` | boolean
`forceDisplayTitle` | boolean
`intercollegiateOnly` | boolean
`visible` | boolean

## Example

```typescript
import type { CreatePositionTypeRequestPositionType } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "nameDisplay": null,
  "ord": null,
  "positionTypeGroupId": null,
  "groupStub": null,
  "forceDisplayTitle": null,
  "intercollegiateOnly": null,
  "visible": null,
} satisfies CreatePositionTypeRequestPositionType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePositionTypeRequestPositionType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


