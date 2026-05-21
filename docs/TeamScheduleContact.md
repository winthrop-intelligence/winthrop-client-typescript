
# TeamScheduleContact

Scheduling contact for a school/sport

## Properties

Name | Type
------------ | -------------
`coachId` | number
`name` | string
`title` | string
`email` | string
`phone` | string
`avatarUrl` | string

## Example

```typescript
import type { TeamScheduleContact } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "coachId": null,
  "name": null,
  "title": null,
  "email": null,
  "phone": null,
  "avatarUrl": null,
} satisfies TeamScheduleContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamScheduleContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


