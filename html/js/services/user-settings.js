/* global module, require */

var name = 'userSettings';
require('angular').module(name, [
]).service(name, function () {
    var ElectronSettings = require('electron-settings');
    /*
     * @TODO the path of the config file should take into account the app name.
     * Currently the path is {userPath}/Electron/electron-settings/{configFileName}
     */
    var userSettings = new ElectronSettings({
        configFileName: 'MemcachedAdminSettings'
    });
    
    /*
     * @TODO ElectronSettings' watcher should be wrapped in an agular event
     */
    return userSettings;
});

module.exports = name;
