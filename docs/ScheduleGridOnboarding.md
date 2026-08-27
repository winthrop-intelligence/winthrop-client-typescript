
# ScheduleGridOnboarding

Empty-schedule onboarding state for the logged-in school\'s upcoming schedule grid

## Properties

Name | Type
------------ | -------------
`show` | boolean
`hasSchoolEnteredContent` | boolean
`suggestedSchools` | [Array&lt;ScheduleGridSchool&gt;](ScheduleGridSchool.md)

## Example

```typescript
import type { ScheduleGridOnboarding } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "show": null,
  "hasSchoolEnteredContent": null,
  "suggestedSchools": null,
} satisfies ScheduleGridOnboarding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridOnboarding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


