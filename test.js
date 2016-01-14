'use strict';

var npmUserDownloads = require('./');

npmUserDownloads('substack', 'last-month').then(function (res) {
  console.log(res);
  console.log(res.length);
});
