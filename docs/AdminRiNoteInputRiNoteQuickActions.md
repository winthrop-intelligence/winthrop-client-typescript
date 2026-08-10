
# AdminRiNoteInputRiNoteQuickActions

Compensation-only \"Coach Quick Actions\" panel — only applied when the requested item\'s requestable_type is Compensation and both role and actions are present.

## Properties

Name | Type
------------ | -------------
`role` | string
`actions` | Array&lt;string&gt;

## Example

```typescript
import type { AdminRiNoteInputRiNoteQuickActions } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "actions": null,
} satisfies AdminRiNoteInputRiNoteQuickActions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminRiNoteInputRiNoteQuickActions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


