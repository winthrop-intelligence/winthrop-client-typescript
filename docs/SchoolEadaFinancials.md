
# SchoolEadaFinancials


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`requestedYear` | number
`availableYears` | Array&lt;number&gt;
`institution` | [EadaInstitutionResult](EadaInstitutionResult.md)
`sports` | [SchoolEadaFinancialsSports](SchoolEadaFinancialsSports.md)

## Example

```typescript
import type { SchoolEadaFinancials } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": null,
  "requestedYear": null,
  "availableYears": null,
  "institution": null,
  "sports": null,
} satisfies SchoolEadaFinancials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchoolEadaFinancials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


