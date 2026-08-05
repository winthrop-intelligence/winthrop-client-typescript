
# DepartmentGuaranteesMarket


## Properties

Name | Type
------------ | -------------
`window` | string
`seasons` | Array&lt;number&gt;
`football` | [DepartmentGuaranteesMarketSide](DepartmentGuaranteesMarketSide.md)
`mensBasketball` | [DepartmentGuaranteesMarketSide](DepartmentGuaranteesMarketSide.md)

## Example

```typescript
import type { DepartmentGuaranteesMarket } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "window": null,
  "seasons": null,
  "football": null,
  "mensBasketball": null,
} satisfies DepartmentGuaranteesMarket

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentGuaranteesMarket
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


