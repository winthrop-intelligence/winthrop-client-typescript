
# GameDetailAllOfGameContract

Contract-level facts (comp_cents, cancel_fee_cents, signed_on, off_site_location, file_url/has_file) are withheld — null / false / absent — unless the caller can view the game contract, the same permission that gates the contract link. id and game_type are always present.

## Properties

Name | Type
------------ | -------------
`id` | number
`gameType` | string
`compCents` | number
`cancelFeeCents` | number
`signedOn` | Date
`offSiteLocation` | string
`fileUrl` | string
`hasFile` | boolean

## Example

```typescript
import type { GameDetailAllOfGameContract } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "gameType": HomeAndHome,
  "compCents": 150000,
  "cancelFeeCents": 50000,
  "signedOn": Wed May 15 00:00:00 UTC 2024,
  "offSiteLocation": Mercedes-Benz Stadium, Atlanta,
  "fileUrl": https://app.example.com/rails/active_storage/blobs/.../contract.pdf,
  "hasFile": true,
} satisfies GameDetailAllOfGameContract

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameDetailAllOfGameContract
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


