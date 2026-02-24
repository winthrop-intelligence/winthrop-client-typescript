
# GetFilterOptions200Response


## Properties

Name | Type
------------ | -------------
`years` | Array&lt;number&gt;
`currentYear` | number
`divisions` | [Array&lt;IdName&gt;](IdName.md)
`sports` | [Array&lt;Sport&gt;](Sport.md)
`positionTypes` | [Array&lt;IdName&gt;](IdName.md)
`geoRegions` | [Array&lt;IdName&gt;](IdName.md)
`genderOptions` | Array&lt;string&gt;
`diversityOptions` | Array&lt;string&gt;
`compensationTypes` | Array&lt;string&gt;

## Example

```typescript
import type { GetFilterOptions200Response } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "years": null,
  "currentYear": null,
  "divisions": null,
  "sports": null,
  "positionTypes": null,
  "geoRegions": null,
  "genderOptions": null,
  "diversityOptions": null,
  "compensationTypes": null,
} satisfies GetFilterOptions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetFilterOptions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


