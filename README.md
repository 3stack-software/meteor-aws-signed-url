aws-signed-url
===============================

Shortened AWS API to sign PUT requests as public-read


Usage
---------------------------

Provide `AWS_SECRET_ACCESS_KEY` and `AWS_ACCESS_KEY_ID` as environment variables.

```js
var s3 = new AWS.S3();
s3.getSignedUrl('putObject', {
  Bucket: '<bucketName>',
  mimeType: '<mime>',
  Key: '<Key>'
})

```
