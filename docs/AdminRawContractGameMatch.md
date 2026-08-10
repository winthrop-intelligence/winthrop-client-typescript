
# AdminRawContractGameMatch


## Properties

Name | Type
------------ | -------------
`id` | number
`assetFileName` | string
`homeSchoolId` | number
`homeSchoolName` | string
`awaySchoolId` | number
`awaySchoolName` | string
`years` | Array&lt;number&gt;
`label` | string

## Example

```typescript
import type { AdminRawContractGameMatch } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "assetFileName": null,
  "homeSchoolId": null,
  "homeSchoolName": null,
  "awaySchoolId": null,
  "awaySchoolName": null,
  "years": null,
  "label": null,
} satisfies AdminRawContractGameMatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRawContractGameMatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


