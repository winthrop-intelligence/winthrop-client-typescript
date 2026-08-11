
# AdminCoachMergeLogPreview


## Properties

Name | Type
------------ | -------------
`primaryCoach` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`duplicateCoach` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`positions` | Array&lt;any&gt;
`compensations` | Array&lt;any&gt;
`incomeReports` | Array&lt;any&gt;
`contracts` | Array&lt;any&gt;
`coaches` | object

## Example

```typescript
import type { AdminCoachMergeLogPreview } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "primaryCoach": null,
  "duplicateCoach": null,
  "positions": null,
  "compensations": null,
  "incomeReports": null,
  "contracts": null,
  "coaches": null,
} satisfies AdminCoachMergeLogPreview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoachMergeLogPreview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


