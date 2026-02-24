
# CashflowGroupStats


## Properties

Name | Type
------------ | -------------
`groupId` | number
`nameId` | string
`name` | string
`shortName` | string
`sports` | [Array&lt;CashflowSportStat&gt;](CashflowSportStat.md)

## Example

```typescript
import type { CashflowGroupStats } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "groupId": null,
  "nameId": null,
  "name": null,
  "shortName": null,
  "sports": null,
} satisfies CashflowGroupStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashflowGroupStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


