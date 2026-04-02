
# RawContract


## Properties

Name | Type
------------ | -------------
`id` | number
`assetFileSize` | number
`assetContentType` | string
`assetFileName` | string
`createdAt` | Date
`updatedAt` | Date
`contractTypeId` | number
`uploaded` | number
`dealId` | number
`schoolId` | number
`schoolRevenueYear` | number
`auditedFinancialYear` | number
`text` | string
`useFlexpaper` | boolean
`gameContractsCount` | number
`driveId` | string
`migratedSuccessfully` | boolean
`migrationFailureReason` | string
`unstractPdfText` | string
`unstractResponsesDetails` | string
`layoutPreservedPdfText` | string

## Example

```typescript
import type { RawContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "assetFileSize": null,
  "assetContentType": null,
  "assetFileName": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "contractTypeId": null,
  "uploaded": null,
  "dealId": null,
  "schoolId": null,
  "schoolRevenueYear": null,
  "auditedFinancialYear": null,
  "text": null,
  "useFlexpaper": null,
  "gameContractsCount": null,
  "driveId": null,
  "migratedSuccessfully": null,
  "migrationFailureReason": null,
  "unstractPdfText": null,
  "unstractResponsesDetails": null,
  "layoutPreservedPdfText": null,
} satisfies RawContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


