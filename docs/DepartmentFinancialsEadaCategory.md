
# DepartmentFinancialsEadaCategory

Suppressed (null) when the source reports no salary, no coach count, or no FTE

## Properties

Name | Type
------------ | -------------
`averageSalaryCents` | number
`coachCount` | number
`fte` | number

## Example

```typescript
import type { DepartmentFinancialsEadaCategory } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "averageSalaryCents": null,
  "coachCount": null,
  "fte": null,
} satisfies DepartmentFinancialsEadaCategory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentFinancialsEadaCategory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


