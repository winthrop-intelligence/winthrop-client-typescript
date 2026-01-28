
# Cashflow


## Properties

Name | Type
------------ | -------------
`id` | number
`seasonId` | number
`cashflowGroupId` | number
`amount` | number
`createdAt` | Date
`updatedAt` | Date
`name` | string

## Example

```typescript
import type { Cashflow } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seasonId": null,
  "cashflowGroupId": null,
  "amount": null,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "name": null,
} satisfies Cashflow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Cashflow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


