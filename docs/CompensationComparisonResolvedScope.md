
# CompensationComparisonResolvedScope


## Properties

Name | Type
------------ | -------------
`schools` | [Array&lt;CompensationComparisonResolvedScopeSchoolsInner&gt;](CompensationComparisonResolvedScopeSchoolsInner.md)
`unresolvedSchoolIds` | Array&lt;number&gt;
`conference` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`sport` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`positionType` | [CompensationComparisonResolvedScopeConference](CompensationComparisonResolvedScopeConference.md)
`year` | number
`titleInclude` | Array&lt;string&gt;
`titleExclude` | Array&lt;string&gt;
`includeMissing` | boolean
`perSchoolLimit` | number
`maxRows` | number
`truncated` | boolean

## Example

```typescript
import type { CompensationComparisonResolvedScope } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schools": null,
  "unresolvedSchoolIds": null,
  "conference": null,
  "sport": null,
  "positionType": null,
  "year": null,
  "titleInclude": null,
  "titleExclude": null,
  "includeMissing": null,
  "perSchoolLimit": null,
  "maxRows": null,
  "truncated": null,
} satisfies CompensationComparisonResolvedScope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationComparisonResolvedScope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


