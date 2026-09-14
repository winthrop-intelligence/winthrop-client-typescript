
# DepartmentOverviewPrivateCoachingPay

What a private department pays its coaches (WINAD-10390), from its EADA filing\'s coaching tables: one row per role and team category, each `amount_cents` the combined pay of the coaches that row covers. The filing states an average salary and a headcount and never the pool, so every figure here is derived per category from those two. Rows the filing does not state are absent; null when the school has no matched EADA report, or when its filing states no usable coaching category.

## Properties

Name | Type
------------ | -------------
`year` | number
`rows` | [Array&lt;DepartmentOverviewPrivateCoachingPayRow&gt;](DepartmentOverviewPrivateCoachingPayRow.md)

## Example

```typescript
import type { DepartmentOverviewPrivateCoachingPay } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "rows": null,
} satisfies DepartmentOverviewPrivateCoachingPay

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentOverviewPrivateCoachingPay
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


