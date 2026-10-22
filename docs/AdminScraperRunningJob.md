
# AdminScraperRunningJob


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
import type { AdminScraperRunningJob } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "active": null,
  "succeeded": null,
  "failed": null,
  "startTime": null,
} satisfies AdminScraperRunningJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminScraperRunningJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


