
# RawContractUploaded


## Properties

Name | Type
------------ | -------------
`id` | number
`filename` | string
`contentType` | string
`fileSize` | number
`coachId` | number
`schoolId` | number
`startOn` | Date
`endOn` | Date
`contractId` | number

## Example

```typescript
import type { RawContractUploaded } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "filename": null,
  "contentType": null,
  "fileSize": null,
  "coachId": null,
  "schoolId": null,
  "startOn": null,
  "endOn": null,
  "contractId": null,
} satisfies RawContractUploaded

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawContractUploaded
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


