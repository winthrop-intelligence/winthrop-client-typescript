
# DeskActivityMetaPeriod


## Properties

Name | Type
------------ | -------------
`name` | string
`requestedFrom` | Date
`from` | Date
`to` | Date
`timezone` | string
`interval` | string
`acrossVersions` | boolean

## Example

```typescript
import type { DeskActivityMetaPeriod } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "requestedFrom": null,
  "from": null,
  "to": null,
  "timezone": null,
  "interval": null,
  "acrossVersions": null,
} satisfies DeskActivityMetaPeriod

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskActivityMetaPeriod
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


