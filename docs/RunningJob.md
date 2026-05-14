
# RunningJob


## Properties

Name | Type
------------ | -------------
`name` | string
`active` | number
`succeeded` | number
`failed` | number
`startTime` | Date

## Example

```typescript
import type { RunningJob } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": ncaa-stats-scraper-job-abcde,
  "active": 1,
  "succeeded": 0,
  "failed": 0,
  "startTime": null,
} satisfies RunningJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunningJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


