# NcaaFinancialReportItemValue


## Properties

Name | Type
------------ | -------------
`itemNumber` | string
`lineItem` | string
`section` | string
`valueKind` | string
`rawValue` | string
`numericValue` | string
`textValue` | string
`reportingStatus` | string
`displayValue` | string
`position` | number

## Example

```typescript
import type { NcaaFinancialReportItemValue } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "itemNumber": null,
  "lineItem": null,
  "section": null,
  "valueKind": null,
  "rawValue": null,
  "numericValue": null,
  "textValue": null,
  "reportingStatus": null,
  "displayValue": null,
  "position": null,
} satisfies NcaaFinancialReportItemValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NcaaFinancialReportItemValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
