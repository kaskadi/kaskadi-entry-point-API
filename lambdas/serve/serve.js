module.exports.handler = async (event) => {
  // retrieve host from query string if defined (meaning we are reaching this endpoint from a test environment)
  const requestHost = event.queryStringParameters ? event.queryStringParameters.host : undefined
  const host = requestHost ? `http://${requestHost}` : process.env.CLOUDFRONT_PUBLIC_HOST
  const index = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kaskadi app</title>
  <link rel="icon" type="image/png" href="${host}/imgs/icons/favicon.png">
  <script type="module" src="${host}/modules/@kaskadi/kaskadi-apps/kaskadi-app.js"></script>
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
  <kaskadi-app appVersion="${process.env.APP_VERSION}"></kaskadi-app>
</body>`
  // assign our index to the body of the reponse
  res.body = index
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: index
  }
}
