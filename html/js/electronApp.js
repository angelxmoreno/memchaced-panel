
/* global module, require */

module.exports = require('angular').module('electronApp', [
    require('angular-sanitize'),
    require('angular-animate'), 
    require('angular-strap'),
    require('./routes')
]);