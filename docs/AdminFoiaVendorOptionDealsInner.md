
# AdminFoiaVendorOptionDealsInner


## Properties

Name | Type
------------ | -------------
`vendor` | string
`startAt` | Date
`endAt` | Date
`autorenew` | boolean

## Example

```typescript
import type { AdminFoiaVendorOptionDealsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "vendor": null,
  "startAt": null,
  "endAt": null,
  "autorenew": null,
} satisfies AdminFoiaVendorOptionDealsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaVendorOptionDealsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


