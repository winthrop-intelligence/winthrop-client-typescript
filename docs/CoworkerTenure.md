
# CoworkerTenure


## Properties

Name | Type
------------ | -------------
`title` | string
`subtitle` | string
`startYear` | number
`endYear` | number
`schoolId` | number
`coaches` | [Array&lt;CoworkerEntry&gt;](CoworkerEntry.md)
`totalCoaches` | number
`administrators` | [Array&lt;CoworkerEntry&gt;](CoworkerEntry.md)
`totalAdministrators` | number

## Example

```typescript
import type { CoworkerTenure } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "subtitle": null,
  "startYear": null,
  "endYear": null,
  "schoolId": null,
  "coaches": null,
  "totalCoaches": null,
  "administrators": null,
  "totalAdministrators": null,
} satisfies CoworkerTenure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoworkerTenure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


