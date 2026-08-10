
# AdminContactLatestPositionsInner


## Properties

Name | Type
------------ | -------------
`year` | number
`school` | [IdName](IdName.md)
`sportNameDisplay` | string
`positionNameDisplay` | string
`departing` | boolean

## Example

```typescript
import type { AdminContactLatestPositionsInner } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "school": null,
  "sportNameDisplay": null,
  "positionNameDisplay": null,
  "departing": null,
} satisfies AdminContactLatestPositionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContactLatestPositionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


