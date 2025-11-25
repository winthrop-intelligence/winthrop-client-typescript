# .IntercollegiateApi

All URIs are relative to *http://api-gateway.default.svc.cluster.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewsFeeds**](IntercollegiateApi.md#createNewsFeeds) | **POST** /wi_jobs/news_feeds | 
[**getJobPost**](IntercollegiateApi.md#getJobPost) | **GET** /wi_jobs/job_posts/{jobPostId} | 
[**getJobPosts**](IntercollegiateApi.md#getJobPosts) | **GET** /wi_jobs/job_posts | 
[**getNewsFeeds**](IntercollegiateApi.md#getNewsFeeds) | **GET** /wi_jobs/news_feeds | 


# **createNewsFeeds**
> NewsFeed createNewsFeeds()

Create news feed

### Example


```typescript
import { createConfiguration, IntercollegiateApi } from '';
import type { IntercollegiateApiCreateNewsFeedsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IntercollegiateApi(configuration);

const request: IntercollegiateApiCreateNewsFeedsRequest = {
  
  newsFeed: {
    id: 1,
    title: "News Feed Title",
    body: "this is a new article about",
    url: "https://google.com/article",
    sourceId: 1,
    sourceType: "ExternalScrapper",
    links: {
      data: [
        {
          name: "url.com",
        },
      ],
    },
    tagsList: {
      data: [
        {
          name: "tag1",
        },
      ],
    },
  },
};

const data = await apiInstance.createNewsFeeds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsFeed** | **NewsFeed**|  |


### Return type

**NewsFeed**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | News Feed was create |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJobPost**
> Job getJobPost()

Retrieve a job post by ID

### Example


```typescript
import { createConfiguration, IntercollegiateApi } from '';
import type { IntercollegiateApiGetJobPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IntercollegiateApi(configuration);

const request: IntercollegiateApiGetJobPostRequest = {
    // ID of job post to return
  jobPostId: 1,
};

const data = await apiInstance.getJobPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobPostId** | [**number**] | ID of job post to return | defaults to undefined


### Return type

**Job**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job Post was found |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJobPosts**
> JobCollection getJobPosts()

Retrieve some or all active jobs

### Example


```typescript
import { createConfiguration, IntercollegiateApi } from '';
import type { IntercollegiateApiGetJobPostsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IntercollegiateApi(configuration);

const request: IntercollegiateApiGetJobPostsRequest = {
    // results page to retrieve. (optional)
  page: 1,
    // number of results per page. (optional)
  perPage: 20,
    // Ransack query (optional)
  q: {},
};

const data = await apiInstance.getJobPosts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | results page to retrieve. | (optional) defaults to 1
 **perPage** | [**number**] | number of results per page. | (optional) defaults to 20
 **q** | **any** | Ransack query | (optional) defaults to undefined


### Return type

**JobCollection**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Jobs were found |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNewsFeeds**
> NewsFeedCollection getNewsFeeds()

Retrieve news feed

### Example


```typescript
import { createConfiguration, IntercollegiateApi } from '';

const configuration = createConfiguration();
const apiInstance = new IntercollegiateApi(configuration);

const request = {};

const data = await apiInstance.getNewsFeeds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NewsFeedCollection**

### Authorization

[ApiKey](README.md#ApiKey), [Oauth2](README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | News Feed were found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


