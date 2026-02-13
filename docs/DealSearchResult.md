
# DealSearchResult


## Properties

Name | Type
------------ | -------------
`id` | number
`dealId` | number
`schoolId` | number
`schoolName` | string
`conferenceName` | string
`conferenceId` | number
`divisionId` | number
`dealTypeName` | string
`dealTypeId` | number
`vendorNames` | Array&lt;string&gt;
`startYear` | number
`endYear` | number
`startAt` | Date
`summary` | string
`autorenew` | boolean
`archived` | boolean

## Example

```typescript
import type { DealSearchResult } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dealId": null,
  "schoolId": null,
  "schoolName": null,
  "conferenceName": null,
  "conferenceId": null,
  "divisionId": null,
  "dealTypeName": null,
  "dealTypeId": null,
  "vendorNames": null,
  "startYear": null,
  "endYear": null,
  "startAt": null,
  "summary": null,
  "autorenew": null,
  "archived": null,
} satisfies DealSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DealSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


