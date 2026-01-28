
# DossierReportResponse


## Properties

Name | Type
------------ | -------------
`leadership` | string
`universityState` | string

## Example

```typescript
import type { DossierReportResponse } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "leadership": # President

**Source URL:** [https://www.alasu.edu/_qa/administration-presidents-bio.php](https://www.alasu.edu/_qa/administration-presidents-bio.php)

## Quinton T. Ross, Jr.
**Title:** President of Alabama State University
**LinkedIn:** [https://www.linkedin.com/in/quinton-t-ross-jr-b1351279](https://www.linkedin.com/in/quinton-t-ross-jr-b1351279)
**Website:** [https://www.alasu.edu/_qa/administration-presidents-bio.php](https://www.alasu.edu/_qa/administration-presidents-bio.php)

...,
  "universityState": # Rankings

- **National Universities:** #392-434
- **Historically Black Colleges and Universities:** #36
...,
} satisfies DossierReportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DossierReportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


