
# CreateMcpEventRequestMcpEvent


## Properties

Name | Type
------------ | -------------
`eventUuid` | string
`eventName` | string
`toolName` | string
`status` | string
`source` | string
`sessionId` | string
`requestId` | string
`workflowId` | string
`rationale` | string
`intent` | string
`startedAt` | Date
`completedAt` | Date
`durationMs` | number
`errorClass` | string
`errorMessage` | string
`objectRefs` | { [key: string]: any; }
`artifactRefs` | { [key: string]: any; }
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CreateMcpEventRequestMcpEvent } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "eventUuid": null,
  "eventName": null,
  "toolName": null,
  "status": null,
  "source": null,
  "sessionId": null,
  "requestId": null,
  "workflowId": null,
  "rationale": null,
  "intent": null,
  "startedAt": null,
  "completedAt": null,
  "durationMs": null,
  "errorClass": null,
  "errorMessage": null,
  "objectRefs": null,
  "artifactRefs": null,
  "metadata": null,
} satisfies CreateMcpEventRequestMcpEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMcpEventRequestMcpEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


