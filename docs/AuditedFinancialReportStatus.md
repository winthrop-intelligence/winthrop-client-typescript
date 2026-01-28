
# AuditedFinancialReportStatus


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`year` | number
`status` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AuditedFinancialReportStatus } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "schoolId": 1,
  "year": 2019,
  "status": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
} satisfies AuditedFinancialReportStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditedFinancialReportStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


