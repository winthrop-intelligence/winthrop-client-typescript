
# DepartmentGuaranteesSlateCoverage

Coverage of the season\'s non-conference slate (WINAD-10394): the scheduling module\'s non-conference games for the season plus every ledger agreement whose game the schedule does not carry. A scheduled game is documented when an agreement the ledger lists backs it — by the schedule\'s link, or by describing the same dated game (sport, the two schools in either order, date) — and a game known only from its agreement is documented by definition, so documented_count never falls below the distinct games the ledger lists. A link to an agreement the ledger does not carry (cancelled, another season\'s, a tournament deal) documents nothing. private_vs_private_count is the undocumented games against a private opponent — the ones no public filing could ever recover. Null when nothing is scheduled and nothing is on file.

## Properties

Name | Type
------------ | -------------
`gameCount` | number
`documentedCount` | number
`privateVsPrivateCount` | number

## Example

```typescript
import type { DepartmentGuaranteesSlateCoverage } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "gameCount": null,
  "documentedCount": null,
  "privateVsPrivateCount": null,
} satisfies DepartmentGuaranteesSlateCoverage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepartmentGuaranteesSlateCoverage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


