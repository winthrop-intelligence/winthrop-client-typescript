
# RoleOption


## Properties

Name | Type
------------ | -------------
`label` | string
`role` | string
`section` | string
`description` | string
`enabled` | boolean

## Example

```typescript
import type { RoleOption } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "role": null,
  "section": null,
  "description": null,
  "enabled": null,
} satisfies RoleOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoleOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


