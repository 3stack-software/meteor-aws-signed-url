Package.describe({
  name: '3stack:aws-signed-url',
  version: '0.0.1',
  summary: 'Short version of the AWS api, just to sign PUT operations',
  git: 'https://github.com/3stack-software/meteor-aws-signed-url',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('3stack:uri@1.11.2', 'server');
  api.export('AWS', 'server');
  api.addFiles('aws-sign-put.js','server');
});
