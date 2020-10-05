![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-entry-point-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-entry-point-api?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-entry-point-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-entry-point-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-entry-point-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/kaskadi-entry-point-api?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/kaskadi-entry-point-api/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The following endpoints are defined in this API:
- [/](#/)

## `/` (target lambda → [serve](#serve)) <a name="/"></a>

Supported methods:
- [GET](#GET)
- [GET](#GET)

### `GET`

**Description:**

This endpoint returns the required HTML content to start the Kaskadi application.

**Query string parameters:**

|   Key  |        Default       | Description                         |
| :----: | :------------------: | :---------------------------------- |
| `host` | `Kaskadi public CDN` | Hosting server for all apps/assets. |

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /?host=host_value
```

### `GET`

**Description:**

This endpoint returns the required HTML content to start the Kaskadi application.

**Query string parameters:**

|   Key  |        Default       | Description                         |
| :----: | :------------------: | :---------------------------------- |
| `host` | `Kaskadi public CDN` | Hosting server for all apps/assets. |

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /?host=host_value
```

# API resources

The following lambda functions are used in this API:
- [serve](#serve)

The following layers are used in this API:
_no layer defined in the [configuration file](./serverless.yml)._

## serve <a name="serve"></a>

|  Name | Sources                             | Timeout |               Handler               |
| :---: | :---------------------------------- | :-----: | :---------------------------------: |
| serve | <ul><li>HTTP</li><li>HTTP</li></ul> | default | [handler](./lambdas/serve/serve.js) |

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value                   |
| :----------- | :---------------------- |
| app          | kaskadi                 |
| service      | kaskadi-entry-point-api |
| logical-unit | entry-point             |
| type         | http                    |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->