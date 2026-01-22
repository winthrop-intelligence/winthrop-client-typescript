
# Avatar


## Properties

Name | Type
------------ | -------------
`originalUrl` | string
`mediumUrl` | string
`smallUrl` | string
`imageRemoteUrl` | string

## Example

```typescript
import type { Avatar } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "originalUrl": https://winthrop-development.s3.amazonaws.com/logos/original/1836339699/Alabama_Crimson_Tide.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2AOM4MHPY54WAI5M%2F20230628%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230628T205207Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=048b817de488c6f8517b260f3494555236ee7593720d7a7695a43e7e320f262c,
  "mediumUrl": https://winthrop-development.s3.amazonaws.com/logos/medium/1836339699/Alabama_Crimson_Tide.gif,
  "smallUrl": https://winthrop-development.s3.amazonaws.com/logos/small/1836339699/Alabama_Crimson_Tide.gif,
  "imageRemoteUrl": https://source.example.com/user/c_v_r/100x100,
} satisfies Avatar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Avatar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


