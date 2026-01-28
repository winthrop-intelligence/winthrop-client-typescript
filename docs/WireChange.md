
# WireChange


## Properties

Name | Type
------------ | -------------
`id` | number
`schoolId` | number
`effectiveDate` | Date
`wireType` | string
`positionTitle` | string
`articleLink` | string
`articleTitle` | string
`articleDescription` | string
`articleSiteName` | string
`articlePublishTime` | Date
`articleImageUrl` | string
`coach` | [WireChangeCoach](WireChangeCoach.md)
`school` | [WireChangeSchool](WireChangeSchool.md)
`positionTypes` | [Array&lt;PositionType&gt;](PositionType.md)
`sports` | [Array&lt;Sport&gt;](Sport.md)

## Example

```typescript
import type { WireChange } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schoolId": null,
  "effectiveDate": null,
  "wireType": null,
  "positionTitle": null,
  "articleLink": null,
  "articleTitle": null,
  "articleDescription": null,
  "articleSiteName": null,
  "articlePublishTime": null,
  "articleImageUrl": null,
  "coach": null,
  "school": null,
  "positionTypes": null,
  "sports": null,
} satisfies WireChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WireChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


