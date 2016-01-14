'use strict';

var _ = require('lodash');
var npmUserPackages = require('npm-user-packages');
var npmPackageDownloads = require('npm-package-downloads');

module.exports = function npmUserDownloads(user, period, _notSort) {
  return npmUserPackages(user)
    .then(function (pkgs) {
      return npmPackageDownloads(_.map(pkgs, 'name'), period);
    })
    .then(function (pkgs) {
      return _notSort ? pkgs : _.sortBy(pkgs, 'downloads').reverse();
    });
};