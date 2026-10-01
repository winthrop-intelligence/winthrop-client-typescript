
# SchedulingMessage


## Properties

Name | Type
------------ | -------------
`id` | number
`source` | string
`status` | string
`recipientEmail` | string

## Example

```typescript
import type { SchedulingMessage } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "source": null,
  "status": null,
  "recipientEmail": null,
} satisfies SchedulingMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchedulingMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


