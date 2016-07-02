/* global module, require */

var name = 'notifications';
require('angular').module(name, [
]).service('notifier', function () {
    var notifier = require('electron-notifications');
    /*
     * @TODO Electron Notifier's events should be wrapped in an agular event
     */
    return notifier;
});

module.exports = name;
