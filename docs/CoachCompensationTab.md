
# CoachCompensationTab


## Properties

Name | Type
------------ | -------------
`canSeeCompensation` | boolean
`chartData` | [CoachCompensationTabChartData](CoachCompensationTabChartData.md)
`compensations` | [Array&lt;CoachCompensationTabCompensationsInner&gt;](CoachCompensationTabCompensationsInner.md)
`totalCompensations` | number
`comparisons` | [CoachCompensationTabComparisons](CoachCompensationTabComparisons.md)
`sidebar` | [CoachCompensationTabSidebar](CoachCompensationTabSidebar.md)
`quartiles` | [QuartilesData](QuartilesData.md)

## Example

```typescript
import type { CoachCompensationTab } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "canSeeCompensation": null,
  "chartData": null,
  "compensations": null,
  "totalCompensations": null,
  "comparisons": null,
  "sidebar": null,
  "quartiles": null,
} satisfies CoachCompensationTab

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoachCompensationTab
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


