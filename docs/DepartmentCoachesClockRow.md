
# DepartmentCoachesClockRow


## Properties

Name | Type
------------ | -------------
`sportAbbrev` | string
`group` | string
`names` | Array&lt;string&gt;
`people` | [Array&lt;DepartmentCoachesClockRowPeopleInner&gt;](DepartmentCoachesClockRowPeopleInner.md)
`state` | string
`date` | string
`approximate` | boolean

## Example

```typescript
import type { DepartmentCoachesClockRow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "sportAbbrev": null,
  "group": null,
  "names": null,
  "people": null,
  "state": null,
  "date": null,
  "approximate": null,
} satisfies DepartmentCoachesClockRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentCoachesClockRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


