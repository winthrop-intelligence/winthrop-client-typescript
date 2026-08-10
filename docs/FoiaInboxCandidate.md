
# FoiaInboxCandidate


## Properties

Name | Type
------------ | -------------
`foiaRequestId` | number
`foiaRequestAdminUrl` | string
`school` | [FoiaInboxSchool](FoiaInboxSchool.md)
`foiaLabel` | [FoiaInboxLabel](FoiaInboxLabel.md)
`state` | string
`status` | string
`dateSent` | Date
`updatedBySchool` | Date
`updatedByWi` | Date
`followUpDate` | Date
`createdAt` | Date
`updatedAt` | Date
`foiaNotes` | [Array&lt;FoiaInboxNote&gt;](FoiaInboxNote.md)
`requestedItems` | [Array&lt;FoiaInboxRequestedItem&gt;](FoiaInboxRequestedItem.md)

## Example

```typescript
import type { FoiaInboxCandidate } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequestId": null,
  "foiaRequestAdminUrl": null,
  "school": null,
  "foiaLabel": null,
  "state": null,
  "status": null,
  "dateSent": null,
  "updatedBySchool": null,
  "updatedByWi": null,
  "followUpDate": null,
  "createdAt": null,
  "updatedAt": null,
  "foiaNotes": null,
  "requestedItems": null,
} satisfies FoiaInboxCandidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxCandidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


