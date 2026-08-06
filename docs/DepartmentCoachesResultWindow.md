
# DepartmentCoachesResultWindow

Season-year bounds the results lens may read from — the client renders the results-axis label from these instead of recreating the window policy

## Properties

Name | Type
------------ | -------------
`startYear` | number
`endYear` | number

## Example

```typescript
import type { DepartmentCoachesResultWindow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "startYear": null,
  "endYear": null,
} satisfies DepartmentCoachesResultWindow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachesResultWindow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


