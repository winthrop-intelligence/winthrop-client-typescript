
# ScheduleGridGame

A scheduled game for one of the grid\'s schools, viewed from that school\'s perspective

## Properties

Name | Type
------------ | -------------
`id` | number
`gameDate` | Date
`opponentId` | number
`opponentName` | string
`opponentShortName` | string
`opponentLogoUrl` | string
`isHome` | boolean
`neutral` | boolean
`guaranteeCents` | number
`inConference` | boolean

## Example

```typescript
import type { ScheduleGridGame } from '@winthrop-intelligence/winthrop-client-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "gameDate": null,
  "opponentId": null,
  "opponentName": null,
  "opponentShortName": null,
  "opponentLogoUrl": null,
  "isHome": null,
  "neutral": null,
  "guaranteeCents": null,
  "inConference": null,
} satisfies ScheduleGridGame

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleGridGame
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


