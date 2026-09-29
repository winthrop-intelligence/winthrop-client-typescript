
# FoiaRequest


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`createdById` | number
`updatedById` | number
`state` | string
`foiaLabelId` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { FoiaRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "schoolId": 2,
  "createdById": 3,
  "updatedById": 4,
  "state": null,
  "foiaLabelId": 5,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies FoiaRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


