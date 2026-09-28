
# ReconciliationIncluded

Only entities referenced by this page, each once and ordered by ID. Missing associations have no entry; clients must tolerate unresolved nullable IDs. Empty result pages contain four empty arrays.

## Properties

Name | Type
------------ | -------------
`coaches` | [Array&lt;ReconciliationCoach&gt;](ReconciliationCoach.md)
`schools` | [Array&lt;ReconciliationSchool&gt;](ReconciliationSchool.md)
`sports` | [Array&lt;ReconciliationSport&gt;](ReconciliationSport.md)
`positionTypes` | [Array&lt;ReconciliationPositionType&gt;](ReconciliationPositionType.md)

## Example

```typescript
import type { ReconciliationIncluded } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coaches": null,
  "schools": null,
  "sports": null,
  "positionTypes": null,
} satisfies ReconciliationIncluded

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReconciliationIncluded
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


