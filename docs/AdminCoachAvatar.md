
# AdminCoachAvatar


## Properties

Name | Type
------------ | -------------
`id` | number
`coachId` | number
`imageRemoteUrl` | string
`cropX` | number
`cropY` | number
`cropW` | number
`cropH` | number
`smallUrl` | string
`mediumUrl` | string

## Example

```typescript
import type { AdminCoachAvatar } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "coachId": null,
  "imageRemoteUrl": null,
  "cropX": null,
  "cropY": null,
  "cropW": null,
  "cropH": null,
  "smallUrl": null,
  "mediumUrl": null,
} satisfies AdminCoachAvatar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminCoachAvatar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


