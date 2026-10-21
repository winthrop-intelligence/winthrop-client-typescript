
# AdminUserActivityInner


## Properties

Name | Type
------------ | -------------
`ip` | string
`city` | string
`state` | string
`requests` | [Array&lt;AdminUserActivityInnerRequestsInner&gt;](AdminUserActivityInnerRequestsInner.md)

## Example

```typescript
import type { AdminUserActivityInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "ip": null,
  "city": null,
  "state": null,
  "requests": null,
} satisfies AdminUserActivityInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUserActivityInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


