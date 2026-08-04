# IntercollegiateApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createNewsFeeds**](IntercollegiateApi.md#createnewsfeeds) | **POST** /wi_jobs/news_feeds |  |
| [**deleteJobPost**](IntercollegiateApi.md#deletejobpost) | **DELETE** /wi_jobs/job_posts/{jobPostId} |  |
| [**getJobPost**](IntercollegiateApi.md#getjobpost) | **GET** /wi_jobs/job_posts/{jobPostId} |  |
| [**getJobPostInterestLeads**](IntercollegiateApi.md#getjobpostinterestleads) | **GET** /wi_jobs/job_post_interest_leads |  |
| [**getJobPostSalaryBenchmark**](IntercollegiateApi.md#getjobpostsalarybenchmark) | **GET** /wi_jobs/job_posts/salary_benchmark |  |
| [**getJobPosts**](IntercollegiateApi.md#getjobposts) | **GET** /wi_jobs/job_posts |  |
| [**getNewsFeeds**](IntercollegiateApi.md#getnewsfeeds) | **GET** /wi_jobs/news_feeds |  |
| [**syncJobPost**](IntercollegiateApi.md#syncjobpost) | **PUT** /wi_jobs/job_posts/{jobPostId}/sync |  |



## createNewsFeeds

> NewsFeed createNewsFeeds(newsFeed)



Create news feed

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateNewsFeedsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // NewsFeed (optional)
    newsFeed: ...,
  } satisfies CreateNewsFeedsRequest;

  try {
    const data = await api.createNewsFeeds(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newsFeed** | [NewsFeed](NewsFeed.md) |  | [Optional] |

### Return type

[**NewsFeed**](NewsFeed.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | News Feed was create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteJobPost

> deleteJobPost(jobPostId, updatedAt)



Delete a synced remote job post

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { DeleteJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // number | Remote ID of job post to delete
    jobPostId: 56,
    // Date | Timestamp of the remote operation being synced.
    updatedAt: 2013-10-20T19:20:30+01:00,
  } satisfies DeleteJobPostRequest;

  try {
    const data = await api.deleteJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | Remote ID of job post to delete | [Defaults to `undefined`] |
| **updatedAt** | `Date` | Timestamp of the remote operation being synced. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Job post was deleted or was already absent |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Invalid delete payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPost

> Job getJobPost(jobPostId)



Retrieve a job post by ID

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // number | ID of job post to return
    jobPostId: 56,
  } satisfies GetJobPostRequest;

  try {
    const data = await api.getJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | ID of job post to return | [Defaults to `undefined`] |

### Return type

[**Job**](Job.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job Post was found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPostInterestLeads

> JobPostInterestLeadCollection getJobPostInterestLeads(date, submittedAfter, submittedBefore, page, perPage)



Retrieve currently active \&quot;I\&#39;m interested\&quot; job-post submissions (leads) for outreach. Only active interest rows are returned; if a candidate undoes their interest in the UI the row is deleted and will not appear in any subsequent response, including for the same date/window.

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostInterestLeadsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // Date | Restrict to interests submitted on this calendar day (application time zone). Format YYYY-MM-DD. May be combined with the submitted_after/submitted_before bounds. (optional)
    date: Mon Jun 22 00:00:00 UTC 2026,
    // Date | Only include interests submitted at or after this timestamp (ISO 8601). (optional)
    submittedAfter: 2026-06-22T00:00Z,
    // Date | Only include interests submitted at or before this timestamp (ISO 8601). (optional)
    submittedBefore: 2026-06-22T23:59:59.999Z,
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
  } satisfies GetJobPostInterestLeadsRequest;

  try {
    const data = await api.getJobPostInterestLeads(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | `Date` | Restrict to interests submitted on this calendar day (application time zone). Format YYYY-MM-DD. May be combined with the submitted_after/submitted_before bounds. | [Optional] [Defaults to `undefined`] |
| **submittedAfter** | `Date` | Only include interests submitted at or after this timestamp (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **submittedBefore** | `Date` | Only include interests submitted at or before this timestamp (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |

### Return type

[**JobPostInterestLeadCollection**](JobPostInterestLeadCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Interest leads were found |  -  |
| **400** | Invalid request — a supplied date/submitted_after/submitted_before value could not be parsed. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPostSalaryBenchmark

> JobPostSalaryBenchmark getJobPostSalaryBenchmark(roleQuery, department, sport, conference, division, schoolQuery, peerSet, dateRangeStart, dateRangeEnd, salaryBasis, responseFormat)



Benchmark recent posted salary ranges for comparable Intercollegiate job posts. This endpoint uses posted job salary fields only and does not use executed WinAD compensation data.

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostSalaryBenchmarkRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // string | Natural-language role/title query, such as athletics HR or Assistant AD Marketing. (optional)
    roleQuery: roleQuery_example,
    // string | Department filter, such as Human Resources, Marketing, or Business Office. (optional)
    department: department_example,
    // string | Sport filter. (optional)
    sport: sport_example,
    // string | Conference name or nickname filter, such as SEC. (optional)
    conference: conference_example,
    // string | Division or subdivision filter, such as Division I, DI, FBS, or Power 4. (optional)
    division: division_example,
    // string | School name, short name, local ID, or WinAD ID filter. (optional)
    schoolQuery: schoolQuery_example,
    // Array<string> | Explicit peer school names or IDs. May be supplied multiple times or comma-separated. (optional)
    peerSet: ...,
    // Date | Start of the posted_at date window. Defaults to six months ago. (optional)
    dateRangeStart: 2013-10-20,
    // Date | End of the posted_at date window. Defaults to today. (optional)
    dateRangeEnd: 2013-10-20,
    // 'posted_range' | 'annualized' | 'raw_posted' | Salary basis requested for the benchmark. (optional)
    salaryBasis: salaryBasis_example,
    // 'concise' | 'detailed' | Concise returns up to five representative posts; detailed returns up to ten. (optional)
    responseFormat: responseFormat_example,
  } satisfies GetJobPostSalaryBenchmarkRequest;

  try {
    const data = await api.getJobPostSalaryBenchmark(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **roleQuery** | `string` | Natural-language role/title query, such as athletics HR or Assistant AD Marketing. | [Optional] [Defaults to `undefined`] |
| **department** | `string` | Department filter, such as Human Resources, Marketing, or Business Office. | [Optional] [Defaults to `undefined`] |
| **sport** | `string` | Sport filter. | [Optional] [Defaults to `undefined`] |
| **conference** | `string` | Conference name or nickname filter, such as SEC. | [Optional] [Defaults to `undefined`] |
| **division** | `string` | Division or subdivision filter, such as Division I, DI, FBS, or Power 4. | [Optional] [Defaults to `undefined`] |
| **schoolQuery** | `string` | School name, short name, local ID, or WinAD ID filter. | [Optional] [Defaults to `undefined`] |
| **peerSet** | `Array<string>` | Explicit peer school names or IDs. May be supplied multiple times or comma-separated. | [Optional] |
| **dateRangeStart** | `Date` | Start of the posted_at date window. Defaults to six months ago. | [Optional] [Defaults to `undefined`] |
| **dateRangeEnd** | `Date` | End of the posted_at date window. Defaults to today. | [Optional] [Defaults to `undefined`] |
| **salaryBasis** | `posted_range`, `annualized`, `raw_posted` | Salary basis requested for the benchmark. | [Optional] [Defaults to `&#39;posted_range&#39;`] [Enum: posted_range, annualized, raw_posted] |
| **responseFormat** | `concise`, `detailed` | Concise returns up to five representative posts; detailed returns up to ten. | [Optional] [Defaults to `&#39;concise&#39;`] [Enum: concise, detailed] |

### Return type

[**JobPostSalaryBenchmark**](JobPostSalaryBenchmark.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Posted salary benchmark packet. |  -  |
| **400** | Invalid request parameters. |  -  |
| **401** | Unauthorized |  -  |
| **403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobPosts

> JobCollection getJobPosts(page, perPage, q)



Retrieve some or all active jobs

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetJobPostsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // number | results page to retrieve. (optional)
    page: 56,
    // number | number of results per page. (optional)
    perPage: 56,
    // object | Ransack query (optional)
    q: Object,
  } satisfies GetJobPostsRequest;

  try {
    const data = await api.getJobPosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | results page to retrieve. | [Optional] [Defaults to `1`] |
| **perPage** | `number` | number of results per page. | [Optional] [Defaults to `20`] |
| **q** | `object` | Ransack query | [Optional] [Defaults to `undefined`] |

### Return type

[**JobCollection**](JobCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Jobs were found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNewsFeeds

> NewsFeedCollection getNewsFeeds()



Retrieve news feed

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { GetNewsFeedsRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  try {
    const data = await api.getNewsFeeds();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NewsFeedCollection**](NewsFeedCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | News Feed were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncJobPost

> Job syncJobPost(jobPostId, remoteJobPost)



Sync a remote Central Jobs job post snapshot, creating or updating as needed

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { SyncJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

async function example() {
  console.log("🚀 Testing @winthrop-intelligence/winthrop-client-typescript SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
    // To configure OAuth2 access token for authorization: Oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IntercollegiateApi(config);

  const body = {
    // number | Central Jobs remote ID of job post to sync
    jobPostId: 56,
    // RemoteJobPost
    remoteJobPost: ...,
  } satisfies SyncJobPostRequest;

  try {
    const data = await api.syncJobPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobPostId** | `number` | Central Jobs remote ID of job post to sync | [Defaults to `undefined`] |
| **remoteJobPost** | [RemoteJobPost](RemoteJobPost.md) |  | |

### Return type

[**Job**](Job.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Oauth2 application](../README.md#Oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job post was synced |  -  |
| **204** | Stale sync payload was ignored |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Invalid job post payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

