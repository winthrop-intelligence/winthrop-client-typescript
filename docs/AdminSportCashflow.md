
# AdminSportCashflow


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`schoolName` | string
`year` | number
`cashflowGroupId` | number
`cashflowGroupName` | string
`amount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AdminSportCashflow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "year": null,
  "cashflowGroupId": null,
  "cashflowGroupName": null,
  "amount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminSportCashflow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSportCashflow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


