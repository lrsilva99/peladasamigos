cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/utility.js",
        "id": "cordova-plugin-ms-adal.utility",
        "pluginId": "cordova-plugin-ms-adal",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationContext.js",
        "id": "cordova-plugin-ms-adal.AuthenticationContext",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationContext"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/CordovaBridge.js",
        "id": "cordova-plugin-ms-adal.CordovaBridge",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationResult.js",
        "id": "cordova-plugin-ms-adal.AuthenticationResult",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCache.js",
        "id": "cordova-plugin-ms-adal.TokenCache",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCacheItem.js",
        "id": "cordova-plugin-ms-adal.TokenCacheItem",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/UserInfo.js",
        "id": "cordova-plugin-ms-adal.UserInfo",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationSettings.js",
        "id": "cordova-plugin-ms-adal.AuthenticationSettings",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationSettings"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-statusbar": "2.1.3",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-ms-adal": "0.8.1",
    "phonegap-plugin-push": "1.8.4"
}
// BOTTOM OF METADATA
});