
# AdminFoiaRequestBuilderLog


## Properties

Name | Type
------------ | -------------
`id` | number
`foiaLabelId` | number
`userId` | number
`message` | string
`status` | string
`builderType` | string
`initializeAt` | Date
`completeAt` | Date
`createdAt` | Date
`updatedAt` | Date
`foiaLabelName` | string
`userName` | string
`hasDetailItems` | boolean
`detail` | object

## Example

```typescript
import type { AdminFoiaRequestBuilderLog } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "foiaLabelId": null,
  "userId": null,
  "message": null,
  "status": null,
  "builderType": null,
  "initializeAt": null,
  "completeAt": null,
  "createdAt": null,
  "updatedAt": null,
  "foiaLabelName": null,
  "userName": null,
  "hasDetailItems": null,
  "detail": null,
} satisfies AdminFoiaRequestBuilderLog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestBuilderLog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


