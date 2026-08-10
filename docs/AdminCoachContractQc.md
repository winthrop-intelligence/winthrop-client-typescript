
# AdminCoachContractQc


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`coachName` | string
`startOn` | Date
`endOn` | Date
`atWill` | boolean
`verified` | boolean
`rawContractId` | number
`compensationYears` | Array&lt;number&gt;

## Example

```typescript
import type { AdminCoachContractQc } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "coachName": null,
  "startOn": null,
  "endOn": null,
  "atWill": null,
  "verified": null,
  "rawContractId": null,
  "compensationYears": null,
} satisfies AdminCoachContractQc

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoachContractQc
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


