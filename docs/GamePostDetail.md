
# GamePostDetail

Full game post detail with contacts and creator info

## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`schoolName` | string
`schoolShortName` | string
`schoolLogoUrl` | string
`sportId` | number
`sportName` | string
`sportSlug` | string
`sportAbbreviation` | string
`startDate` | Date
`endDate` | Date
`description` | string
`status` | string
`expiresOn` | Date
`createdAt` | Date
`updatedAt` | Date
`gameTypesDisplay` | string
`city` | string
`stateName` | string
`lastRpi` | number
`avgRpi` | number
`distance` | number
`canManage` | boolean
`createdBy` | [GamePostDetailCreatedBy](GamePostDetailCreatedBy.md)
`gameTypes` | [Array&lt;GameType&gt;](GameType.md)
`contacts` | [Array&lt;GamePostContact&gt;](GamePostContact.md)
`scheduleSummary` | [GamePostScheduleSummary](GamePostScheduleSummary.md)

## Example

```typescript
import type { GamePostDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "schoolName": null,
  "schoolShortName": null,
  "schoolLogoUrl": null,
  "sportId": null,
  "sportName": null,
  "sportSlug": null,
  "sportAbbreviation": null,
  "startDate": null,
  "endDate": null,
  "description": null,
  "status": null,
  "expiresOn": null,
  "createdAt": null,
  "updatedAt": null,
  "gameTypesDisplay": null,
  "city": null,
  "stateName": null,
  "lastRpi": null,
  "avgRpi": null,
  "distance": null,
  "canManage": null,
  "createdBy": null,
  "gameTypes": null,
  "contacts": null,
  "scheduleSummary": null,
} satisfies GamePostDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GamePostDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


