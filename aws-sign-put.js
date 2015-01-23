var crypto = Npm.require('crypto');

var accessKey = process.env.AWS_SECRET_ACCESS_KEY;
var keyId = process.env.AWS_ACCESS_KEY_ID;

AWS = {};

AWS.S3 = function AWS_S3(){};

AWS.S3.prototype.getSignedUrl = function AWS_S3_getSignedUrl(action, params){
  var signature, expiry ;
  if (action!='putObject'){
    throw new Error("Unsupported operation " + action)
  }

  expiry =  parseInt((new Date()).getTime()/1000) + 300;
  signature = crypto.createHmac('sha1', accessKey)
    .update("PUT\n\n" + [params.mimeType, expiry, 'x-amz-acl:public-read', '/' + params.Bucket + '/' + encodeURI(params.Key)].join("\n"))
    .digest('base64');

  var bucketUri = params.bucketUri || ('https://' + params.Bucket + '.s3.amazonaws.com/');
  var uri = URI(bucketUri + encodeURI(params.Key));
  uri.addQuery('AWSAccessKeyId', keyId);
  uri.addQuery('Expires', expiry);
  uri.addQuery('Signature', signature);
  return uri.toString();
};
