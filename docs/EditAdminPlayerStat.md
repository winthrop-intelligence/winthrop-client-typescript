
# EditAdminPlayerStat


## Properties

Name | Type
------------ | -------------
`playerStat` | [AdminPlayerStat](AdminPlayerStat.md)
`players` | [Array&lt;PlayerOption&gt;](PlayerOption.md)
`schools` | [Array&lt;IdName&gt;](IdName.md)
`sports` | [Array&lt;IdName&gt;](IdName.md)
`yearOptions` | Array&lt;number&gt;
`eligibleOptions` | Array&lt;string&gt;

## Example

```typescript
import type { EditAdminPlayerStat } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "playerStat": null,
  "players": null,
  "schools": null,
  "sports": null,
  "yearOptions": null,
  "eligibleOptions": null,
} satisfies EditAdminPlayerStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EditAdminPlayerStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


