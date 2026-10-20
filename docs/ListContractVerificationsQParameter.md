
# ListContractVerificationsQParameter


## Properties

Name | Type
------------ | -------------
`contractIdIn` | Array&lt;number&gt;
`contractSchoolIdEq` | number
`contractSchoolIdIn` | Array&lt;number&gt;
`seasonsContains` | number
`batchIdEq` | string
`codeVersionEq` | string

## Example

```typescript
import type { ListContractVerificationsQParameter } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "contractIdIn": null,
  "contractSchoolIdEq": null,
  "contractSchoolIdIn": null,
  "seasonsContains": null,
  "batchIdEq": null,
  "codeVersionEq": null,
} satisfies ListContractVerificationsQParameter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListContractVerificationsQParameter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


