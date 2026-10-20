
# UnknownRansackConditionErrorErrors


## Properties

Name | Type
------------ | -------------
`q` | Array&lt;string&gt;

## Example

```typescript
import type { UnknownRansackConditionErrorErrors } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "q": ["unknown condition: nosuchfield_eq","condition has no predicate: name (use name_eq, name_cont, ...)"],
} satisfies UnknownRansackConditionErrorErrors

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnknownRansackConditionErrorErrors
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


