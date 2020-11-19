![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-entry-point-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-entry-point-api?color=blue)

**GitHub Actions workflows status**

[![Deploy status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Adeploy)
[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Abuild)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-entry-point-api/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-entry-point-api/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-entry-point-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-entry-point-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-entry-point-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-entry-point-api)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The origin and root path for this API is: `https://erp.klimapartner.net`

The following endpoints are defined in this API:
- [/](#/)
- [/{proxy+}](#/{proxy+})

## `/` <a name="/"></a>

Supported methods:
- [GET](#/-GET)

### `GET` (target lambda → [serve](#serve)) <a name="/-GET"></a>

**Description:**

This endpoint returns the required HTML content to start the Kaskadi application.

**Authorization:**

No authorizer found for this method.

**Query string parameters:**

|   Key  |        Default       | Description                         |
| :----: | :------------------: | :---------------------------------- |
| `host` | `Kaskadi public CDN` | Hosting server for all apps/assets. |

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://erp.klimapartner.net/
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *
  content-type: text/html

Body:
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kaskadi app</title>
    <link rel="icon" type="image/png" href="https://cdn.klimapartner.net/imgs/icons/favicon.png">
    <script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-apps/kaskadi-app.js"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <kaskadi-app appVersion="1.0.0"></kaskadi-app>
  </body>
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
GET https://erp.klimapartner.net/?host=localhost:3000
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *
  content-type: text/html

Body:
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kaskadi app</title>
    <link rel="icon" type="image/png" href="https://cdn.klimapartner.net/imgs/icons/favicon.png">
    <script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-apps/kaskadi-app.js"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <kaskadi-app appVersion="1.0.0"></kaskadi-app>
  </body>
```
</details>

## `/{proxy+}` <a name="/{proxy+}"></a>

Supported methods:
- [GET](#/{proxy+}-GET)

### `GET` (target lambda → [serve](#serve)) <a name="/{proxy+}-GET"></a>

**Description:**

This endpoint returns the required HTML content to start the Kaskadi application.

**Authorization:**

No authorizer found for this method.

**Query string parameters:**

|   Key  |        Default       | Description                         |
| :----: | :------------------: | :---------------------------------- |
| `host` | `Kaskadi public CDN` | Hosting server for all apps/assets. |

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://erp.klimapartner.net/we_can_type_anything_here
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *
  content-type: text/html

Body:
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kaskadi app</title>
    <link rel="icon" type="image/png" href="https://cdn.klimapartner.net/imgs/icons/favicon.png">
    <script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-apps/kaskadi-app.js"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <kaskadi-app appVersion="1.0.0"></kaskadi-app>
  </body>
```
</details>

<details>
<summary>Example #2</summary>

_Request:_

```HTTP
GET https://erp.klimapartner.net/we_really_can_type_anything_here?host=localhost:3000
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *
  content-type: text/html

Body:
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kaskadi app</title>
    <link rel="icon" type="image/png" href="https://cdn.klimapartner.net/imgs/icons/favicon.png">
    <script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-apps/kaskadi-app.js"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <kaskadi-app appVersion="1.0.0"></kaskadi-app>
  </body>
```
</details>

# API resources

The following lambda functions are used in this API:
- [serve](#serve)

The following layers are used in this API:
_no layer defined in the [configuration file](./serverless.yml)._

## serve <a name="serve"></a>

|  Name | Sources                                         | Timeout |               Handler               |
| :---: | :---------------------------------------------- | :-----: | :---------------------------------: |
| serve | <ul><li>HTTP (GET)</li><li>HTTP (GET)</li></ul> | default | [handler](./lambdas/serve/serve.js) |

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