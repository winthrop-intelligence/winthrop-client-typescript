
# ScheduleGridAvailableSchools

Response for GET /schedule_grid/{sport_name}/available_schools

## Properties

Name | Type
------------ | -------------
`availableCount` | number
`schools` | [Array&lt;ScheduleGridAvailableSchoolRow&gt;](ScheduleGridAvailableSchoolRow.md)

## Example

```typescript
import type { ScheduleGridAvailableSchools } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "availableCount": null,
  "schools": null,
} satisfies ScheduleGridAvailableSchools

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridAvailableSchools
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


