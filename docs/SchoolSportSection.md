
# SchoolSportSection


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`averageAttendance` | number
`paysAverageCents` | number
`receivesAverageCents` | number
`seasons` | [Array&lt;SchoolSportSeason&gt;](SchoolSportSeason.md)
`wlChart` | [Array&lt;SchoolWLChartPoint&gt;](SchoolWLChartPoint.md)
`homeContracts` | [Array&lt;SchoolContractEntry&gt;](SchoolContractEntry.md)
`awayContracts` | [Array&lt;SchoolContractEntry&gt;](SchoolContractEntry.md)

## Example

```typescript
import type { SchoolSportSection } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "averageAttendance": null,
  "paysAverageCents": null,
  "receivesAverageCents": null,
  "seasons": null,
  "wlChart": null,
  "homeContracts": null,
  "awayContracts": null,
} satisfies SchoolSportSection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolSportSection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


