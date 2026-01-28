
# PositionType


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`nameDisplay` | string
`ord` | number
`createdAt` | Date
`updatedAt` | Date
`positionTypeGroup` | [PositionTypeGroup](PositionTypeGroup.md)
`forceDisplayTitle` | boolean
`intercollegiateOnly` | boolean

## Example

```typescript
import type { PositionType } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": POSITION NAME,
  "nameDisplay": Position Name,
  "ord": 2,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "positionTypeGroup": null,
  "forceDisplayTitle": false,
  "intercollegiateOnly": false,
} satisfies PositionType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PositionType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


