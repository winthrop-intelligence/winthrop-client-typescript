
# FoiaInboxSchool


## Properties

Name | Type
------------ | -------------
`id` | number
`adminUrl` | string
`name` | string
`shortName` | string
`alternateNames` | Array&lt;{ [key: string]: any; }&gt;
`state` | string
`stateName` | string
`portalSite` | string
`contacts` | Array&lt;{ [key: string]: any; }&gt;
`notes` | [Array&lt;FoiaInboxNote&gt;](FoiaInboxNote.md)

## Example

```typescript
import type { FoiaInboxSchool } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "adminUrl": null,
  "name": null,
  "shortName": null,
  "alternateNames": null,
  "state": null,
  "stateName": null,
  "portalSite": null,
  "contacts": null,
  "notes": null,
} satisfies FoiaInboxSchool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxSchool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


