
# AdminCompensationSchool

Display school from the first linked position\'s season, falling back to the stored school for unlinked rows and placeholders. school_id remains the stored editing identity.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`shortNameOrName` | string

## Example

```typescript
import type { AdminCompensationSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "shortNameOrName": null,
} satisfies AdminCompensationSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCompensationSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


