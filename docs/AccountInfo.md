
# AccountInfo


## Properties

Name | Type
------------ | -------------
`name` | string
`emailDomain` | string
`accountableType` | string
`accountableId` | number

## Example

```typescript
import type { AccountInfo } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "emailDomain": null,
  "accountableType": null,
  "accountableId": null,
} satisfies AccountInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


