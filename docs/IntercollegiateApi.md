# IntercollegiateApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createJobPost**](IntercollegiateApi.md#createjobpost) | **POST** /wi_jobs/job_posts |  |
| [**createNewsFeeds**](IntercollegiateApi.md#createnewsfeeds) | **POST** /wi_jobs/news_feeds |  |
| [**deleteJobPost**](IntercollegiateApi.md#deletejobpost) | **DELETE** /wi_jobs/job_posts/{jobPostId} |  |
| [**getJobPost**](IntercollegiateApi.md#getjobpost) | **GET** /wi_jobs/job_posts/{jobPostId} |  |
| [**getJobPosts**](IntercollegiateApi.md#getjobposts) | **GET** /wi_jobs/job_posts |  |
| [**getNewsFeeds**](IntercollegiateApi.md#getnewsfeeds) | **GET** /wi_jobs/news_feeds |  |
| [**updateJobPost**](IntercollegiateApi.md#updatejobpost) | **PATCH** /wi_jobs/job_posts/{jobPostId} |  |



## createJobPost

> Job createJobPost(remoteJobPost)



Create or sync a remote job post

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { CreateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // RemoteJobPost
    remoteJobPost: ...,
  } satisfies CreateJobPostRequest;

  try {
    const data = await api.createJobPost(body);
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
| **201** | Job post was created or synced |  -  |
| **204** | Stale sync payload was ignored |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Invalid job post payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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


## updateJobPost

> Job updateJobPost(jobPostId, remoteJobPost)



Update or sync a remote job post

### Example

```ts
import {
  Configuration,
  IntercollegiateApi,
} from '@winthrop-intelligence/winthrop-client-typescript';
import type { UpdateJobPostRequest } from '@winthrop-intelligence/winthrop-client-typescript';

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
    // number | Remote ID of job post to update
    jobPostId: 56,
    // RemoteJobPost
    remoteJobPost: ...,
  } satisfies UpdateJobPostRequest;

  try {
    const data = await api.updateJobPost(body);
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
| **jobPostId** | `number` | Remote ID of job post to update | [Defaults to `undefined`] |
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
| **200** | Job post was updated or synced |  -  |
| **204** | Stale sync payload was ignored |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Invalid job post payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

