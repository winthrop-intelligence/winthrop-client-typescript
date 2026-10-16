
# UpdateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`yearNumber` | number
`serviceStart` | Date
`serviceEnd` | Date
`amountCents` | number
`dueDate` | Date
`destroy` | boolean

## Example

```typescript
import type { UpdateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "yearNumber": null,
  "serviceStart": null,
  "serviceEnd": null,
  "amountCents": null,
  "dueDate": null,
  "destroy": null,
} satisfies UpdateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSubscriptionRequestSubscriptionSubscriptionYearsAttributesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


