
# DeskAdminCoverImage

One stored cover image (WINAD-10725); null when the slot is empty.

## Properties

Name | Type
------------ | -------------
`filename` | string
`byteSize` | number
`url` | string

## Example

```typescript
import type { DeskAdminCoverImage } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "filename": null,
  "byteSize": null,
  "url": null,
} satisfies DeskAdminCoverImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskAdminCoverImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


