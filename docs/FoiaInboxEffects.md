
# FoiaInboxEffects


## Properties

Name | Type
------------ | -------------
`foiaRequest` | [FoiaInboxEffectsFoiaRequest](FoiaInboxEffectsFoiaRequest.md)
`compensationExceptions` | [Array&lt;FoiaInboxCompensationException&gt;](FoiaInboxCompensationException.md)

## Example

```typescript
import type { FoiaInboxEffects } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "foiaRequest": null,
  "compensationExceptions": null,
} satisfies FoiaInboxEffects

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FoiaInboxEffects
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


