
# AdminSubdivisionMembership

A school\'s membership in a subdivision (admin namespace)

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`subdivisionId` | number
`school` | [ContactSearchCoachOptionsCoachesInner](ContactSearchCoachOptionsCoachesInner.md)
`subdivision` | [ContactSearchCoachOptionsSportsInner](ContactSearchCoachOptionsSportsInner.md)

## Example

```typescript
import type { AdminSubdivisionMembership } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "subdivisionId": null,
  "school": null,
  "subdivision": null,
} satisfies AdminSubdivisionMembership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminSubdivisionMembership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


