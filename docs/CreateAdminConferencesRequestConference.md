
# CreateAdminConferencesRequestConference


## Properties

Name | Type
------------ | -------------
`name` | string
`nameDisplay` | string
`nickname` | string
`headquarters` | string
`founded` | number
`divisionId` | number
`externalUrl` | string

## Example

```typescript
import type { CreateAdminConferencesRequestConference } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "nameDisplay": null,
  "nickname": null,
  "headquarters": null,
  "founded": null,
  "divisionId": null,
  "externalUrl": null,
} satisfies CreateAdminConferencesRequestConference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAdminConferencesRequestConference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


