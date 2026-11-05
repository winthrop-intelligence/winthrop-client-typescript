
# UpdateAdminRankingsRequest


## Properties

Name | Type
------------ | -------------
`conferenceId` | number
`year` | string
`school` | [{ [key: string]: UpdateAdminRankingsRequestSchoolValue; }](UpdateAdminRankingsRequestSchoolValue.md)

## Example

```typescript
import type { UpdateAdminRankingsRequest } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "conferenceId": null,
  "year": null,
  "school": null,
} satisfies UpdateAdminRankingsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAdminRankingsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


