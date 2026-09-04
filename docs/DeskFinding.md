
# DeskFinding

One desk-report v1 finding (doc/desk/report-markup.md §10) — a 07.1 row

## Properties

Name | Type
------------ | -------------
`code` | string
`severity` | string
`message` | string
`line` | number
`nodeHint` | string

## Example

```typescript
import type { DeskFinding } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "severity": null,
  "message": null,
  "line": null,
  "nodeHint": null,
} satisfies DeskFinding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeskFinding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


