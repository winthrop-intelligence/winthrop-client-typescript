
# AdminPlayerStatFilterOptions


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;IdName&gt;](IdName.md)
`currentSeasonYear` | number
`yearOptions` | [Array&lt;AdminPlayerStatFilterOptionsYearOptionsInner&gt;](AdminPlayerStatFilterOptionsYearOptionsInner.md)

## Example

```typescript
import type { AdminPlayerStatFilterOptions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "currentSeasonYear": null,
  "yearOptions": null,
} satisfies AdminPlayerStatFilterOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerStatFilterOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


