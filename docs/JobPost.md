
# JobPost


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`link` | string
`uid` | string
`workType` | string
`description` | string
`descriptionMd` | string
`salarySummary` | string
`annualSalary` | number
`payPeriod` | string
`minSalary` | number
`maxSalary` | number
`schoolId` | number
`requiredYearsOfExperience` | number
`expired` | boolean
`createdAt` | Date
`updatedAt` | Date
`categories` | [Array&lt;Category&gt;](Category.md)
`mlIsAthletics` | boolean
`llmIsAthletics` | boolean
`humanOverrideIsAthletics` | boolean
`status` | string

## Example

```typescript
import type { JobPost } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "link": null,
  "uid": null,
  "workType": null,
  "description": null,
  "descriptionMd": null,
  "salarySummary": null,
  "annualSalary": null,
  "payPeriod": null,
  "minSalary": null,
  "maxSalary": null,
  "schoolId": null,
  "requiredYearsOfExperience": null,
  "expired": null,
  "createdAt": null,
  "updatedAt": null,
  "categories": null,
  "mlIsAthletics": null,
  "llmIsAthletics": null,
  "humanOverrideIsAthletics": null,
  "status": null,
} satisfies JobPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


