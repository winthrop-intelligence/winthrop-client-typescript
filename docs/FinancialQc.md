
# FinancialQc


## Properties

Name | Type
------------ | -------------
`schoolId` | number
`schoolName` | string
`nccaPdf` | boolean
`auditedPdf` | boolean
`ncaCsv` | boolean
`schoolInfoCsv` | boolean
`sportStatsCsv` | boolean
`year` | number

## Example

```typescript
import type { FinancialQc } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "schoolId": 1,
  "schoolName": Example School,
  "nccaPdf": true,
  "auditedPdf": false,
  "ncaCsv": true,
  "schoolInfoCsv": false,
  "sportStatsCsv": true,
  "year": 2024,
} satisfies FinancialQc

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialQc
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


