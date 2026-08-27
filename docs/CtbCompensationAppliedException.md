
# CtbCompensationAppliedException


## Properties

Name | Type
------------ | -------------
`requestedItemId` | number
`compensationId` | number
`role` | string
`actions` | Set&lt;string&gt;
`requestedItemNote` | string
`compensationComment` | string
`positionIds` | Set&lt;number&gt;

## Example

```typescript
import type { CtbCompensationAppliedException } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "requestedItemId": null,
  "compensationId": null,
  "role": null,
  "actions": null,
  "requestedItemNote": null,
  "compensationComment": null,
  "positionIds": null,
} satisfies CtbCompensationAppliedException

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CtbCompensationAppliedException
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


