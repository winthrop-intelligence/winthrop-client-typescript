
# User


## Properties

Name | Type
------------ | -------------
`id` | number
`email` | string
`firstName` | string
`lastName` | string
`createdAt` | Date
`updatedAt` | Date
`state` | string
`title` | string
`accountableId` | number
`accountableType` | string
`coachId` | number
`divisions` | [Array&lt;Division&gt;](Division.md)
`roles` | Array&lt;string&gt;

## Example

```typescript
import type { User } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "email": joe@example.com,
  "firstName": Joe,
  "lastName": Smith,
  "createdAt": 2019-01-01T00:00Z,
  "updatedAt": 2019-01-01T00:00Z,
  "state": null,
  "title": Director of Athletics,
  "accountableId": 1,
  "accountableType": School,
  "coachId": 1,
  "divisions": null,
  "roles": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


