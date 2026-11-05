
# AdminPlayerDetail


## Properties

Name | Type
------------ | -------------
`id` | number
`firstName` | string
`lastName` | string
`externalCode` | string
`weight` | number
`height` | number
`heightDisplay` | string
`createdAt` | Date
`updatedAt` | Date
`playerStats` | [Array&lt;AdminPlayerStatSummary&gt;](AdminPlayerStatSummary.md)

## Example

```typescript
import type { AdminPlayerDetail } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "externalCode": null,
  "weight": null,
  "height": null,
  "heightDisplay": null,
  "createdAt": null,
  "updatedAt": null,
  "playerStats": null,
} satisfies AdminPlayerDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPlayerDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


