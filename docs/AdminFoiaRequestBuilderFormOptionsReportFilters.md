
# AdminFoiaRequestBuilderFormOptionsReportFilters


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`conferences` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`divisions` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`subdivisions` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`states` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`labels` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)
`contractStatuses` | [Array&lt;AdminFoiaFilterOption&gt;](AdminFoiaFilterOption.md)

## Example

```typescript
import type { AdminFoiaRequestBuilderFormOptionsReportFilters } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "conferences": null,
  "divisions": null,
  "subdivisions": null,
  "states": null,
  "labels": null,
  "contractStatuses": null,
} satisfies AdminFoiaRequestBuilderFormOptionsReportFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminFoiaRequestBuilderFormOptionsReportFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


