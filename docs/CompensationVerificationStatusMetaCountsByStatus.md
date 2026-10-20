
# CompensationVerificationStatusMetaCountsByStatus

Rows per status for the whole scope, before status[] and q.

## Properties

Name | Type
------------ | -------------
`verified` | number
`changedSinceVerified` | number
`mismatch` | number
`couldNotVerify` | number
`revoked` | number
`notVerified` | number
`unlinked` | number

## Example

```typescript
import type { CompensationVerificationStatusMetaCountsByStatus } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "verified": null,
  "changedSinceVerified": null,
  "mismatch": null,
  "couldNotVerify": null,
  "revoked": null,
  "notVerified": null,
  "unlinked": null,
} satisfies CompensationVerificationStatusMetaCountsByStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompensationVerificationStatusMetaCountsByStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


