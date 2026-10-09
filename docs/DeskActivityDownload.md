
# DeskActivityDownload


## Properties

Name | Type
------------ | -------------
`userId` | string
`name` | string
`email` | string
`status` | string
`currentAccess` | boolean
`downloads` | number
`firstDownloadedAt` | Date
`lastDownloadedAt` | Date
`fileName` | string
`fileLabel` | string
`fileType` | string
`artifactId` | string
`artifactVersionId` | string
`versionNumber` | number
`identityContext` | string
`versionContext` | string

## Example

```typescript
import type { DeskActivityDownload } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "name": null,
  "email": null,
  "status": null,
  "currentAccess": null,
  "downloads": null,
  "firstDownloadedAt": null,
  "lastDownloadedAt": null,
  "fileName": null,
  "fileLabel": null,
  "fileType": null,
  "artifactId": null,
  "artifactVersionId": null,
  "versionNumber": null,
  "identityContext": null,
  "versionContext": null,
} satisfies DeskActivityDownload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskActivityDownload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


