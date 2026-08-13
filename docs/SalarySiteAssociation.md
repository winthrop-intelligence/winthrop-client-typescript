
# SalarySiteAssociation


## Properties

Name | Type
------------ | -------------
`associationId` | number
`schoolId` | number
`siteId` | number
`siteUrl` | string
`siteType` | string
`notes` | string
`associationCreatedAt` | Date
`associationUpdatedAt` | Date
`siteCreatedAt` | Date
`siteUpdatedAt` | Date

## Example

```typescript
import type { SalarySiteAssociation } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "associationId": null,
  "schoolId": null,
  "siteId": null,
  "siteUrl": null,
  "siteType": null,
  "notes": null,
  "associationCreatedAt": null,
  "associationUpdatedAt": null,
  "siteCreatedAt": null,
  "siteUpdatedAt": null,
} satisfies SalarySiteAssociation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SalarySiteAssociation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


