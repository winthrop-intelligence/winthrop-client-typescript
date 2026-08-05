
# NcaaFinancialReportItemGroup


## Properties

Name | Type
------------ | -------------
`section` | string
`items` | [Array&lt;NcaaFinancialReportItemValue&gt;](NcaaFinancialReportItemValue.md)

## Example

```typescript
import type { NcaaFinancialReportItemGroup } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "section": null,
  "items": null,
} satisfies NcaaFinancialReportItemGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NcaaFinancialReportItemGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


