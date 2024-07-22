function InitVKBridge() {
    vkBridge.send('VKWebAppInit')
        .then(function (data) {
            console.log('VK Initialized', data);
        })
        .catch(function (error) {
            console.error('VK Initialization Error', error);
        });
}

function GetVKUserInfo() {
    vkBridge.send('VKWebAppGetUserInfo')
        .then(function (data) {
            console.log('User Info:', data);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
        })
        .catch(function (error) {
            console.error('User Info Error:', error);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function AddToFavorites() {
    vkBridge.send('VKWebAppAddToFavorites')
        .then(function (data) {
            console.log('Added to Favorites', data);
        })
        .catch(function (error) {
            console.error('Add to Favorites Error', error);
        });
}

function AllowNotifications() {
    vkBridge.send('VKWebAppAllowNotifications')
        .then(function (data) {
            console.log('Notifications allowed', data);
        })
        .catch(function (error) {
            console.error('Allow Notifications Error', error);
        });
}

function OpenApp(appId) {
    vkBridge.send('VKWebAppOpenApp', {app_id: appId})
        .then(function (data) {
            console.log('App opened', data);
        })
        .catch(function (error) {
            console.error('Open App Error', error);
        });
}

function TrackEvent(eventName, eventData) {
    vkBridge.send('VKWebAppTrackEvent', {event_name: eventName, event_data: eventData})
        .then(function (data) {
            console.log('Event tracked', data);
        })
        .catch(function (error) {
            console.error('Track Event Error', error);
        });
}

function AddToCommunity() {
    vkBridge.send('VKWebAppAddToCommunity')
        .then(function (data) {
            console.log('Added to Community', data);
        })
        .catch(function (error) {
            console.error('Add to Community Error', error);
        });
}

function ShowOrderBox(item) {
    vkBridge.send('VKWebAppShowOrderBox', {item: item})
        .then(function (data) {
            console.log('Order Box shown', data);
        })
        .catch(function (error) {
            console.error('Show Order Box Error', error);
        });
}

function ShowSubscriptionBox(subscription) {
    vkBridge.send('VKWebAppShowSubscriptionBox', {subscription: subscription})
        .then(function (data) {
            console.log('Subscription Box shown', data);
        })
        .catch(function (error) {
            console.error('Show Subscription Box Error', error);
        });
}

function OpenPayForm(params) {
    vkBridge.send('VKWebAppOpenPayForm', params)
        .then(function (data) {
            console.log('Pay Form opened', data);
        })
        .catch(function (error) {
            console.error('Open Pay Form Error', error);
        });
}

function RecommendApp() {
    vkBridge.send('VKWebAppRecommend')
        .then(function (data) {
            console.log('App recommended', data);
        })
        .catch(function (error) {
            console.error('Recommend App Error', error);
        });
}

function CheckNativeAds() {
    vkBridge.send('VKWebAppCheckNativeAds')
        .then(function (data) {
            console.log('Native Ads checked', data);
        })
        .catch(function (error) {
            console.error('Check Native Ads Error', error);
        });
}

function GetAds() {
    vkBridge.send('VKWebAppGetAds')
        .then(function (data) {
            console.log('Ads received', data);
        })
        .catch(function (error) {
            console.error('Get Ads Error', error);
        });
}

function ShowNativeAds() {
    vkBridge.send('VKWebAppShowNativeAds')
        .then(function (data) {
            console.log('Native Ads shown', data);
        })
        .catch(function (error) {
            console.error('Show Native Ads Error', error);
        });
}

function ShowBannerAd() {
    vkBridge.send('VKWebAppShowBannerAd')
        .then(function (data) {
            console.log('Banner Ad shown', data);
        })
        .catch(function (error) {
            console.error('Show Banner Ad Error', error);
        });
}

function BannerAdUpdated() {
    vkBridge.send('VKWebAppBannerAdUpdated')
        .then(function (data) {
            console.log('Banner Ad updated', data);
        })
        .catch(function (error) {
            console.error('Banner Ad Updated Error', error);
        });
}

function CheckBannerAd() {
    vkBridge.send('VKWebAppCheckBannerAd')
        .then(function (data) {
            console.log('Banner Ad checked', data);
        })
        .catch(function (error) {
            console.error('Check Banner Ad Error', error);
        });
}

function HideBannerAd() {
    vkBridge.send('VKWebAppHideBannerAd')
        .then(function (data) {
            console.log('Banner Ad hidden', data);
        })
        .catch(function (error) {
            console.error('Hide Banner Ad Error', error);
        });
}

function BannerAdClosedByUser() {
    vkBridge.send('VKWebAppBannerAdClosedByUser')
        .then(function (data) {
            console.log('Banner Ad closed by user', data);
        })
        .catch(function (error) {
            console.error('Banner Ad Closed By User Error', error);
        });
}

function StorageGet(key) {
    vkBridge.send('VKWebAppStorageGet', {keys: [key]})
        .then(function (data) {
            console.log('Storage Get', data);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
        })
        .catch(function (error) {
            console.error('Storage Get Error', error);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function StorageGetKeys() {
    vkBridge.send('VKWebAppStorageGetKeys')
        .then(function (data) {
            console.log('Storage Get Keys', data);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
        })
        .catch(function (error) {
            console.error('Storage Get Keys Error', error);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function StorageSet(key, value) {
    vkBridge.send('VKWebAppStorageSet', {key: key, value: value})
        .then(function (data) {
            console.log('Storage Set', data);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
        })
        .catch(function (error) {
            console.error('Storage Set Error', error);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function TapticImpactOccurred() {
    vkBridge.send('VKWebAppTapticImpactOccurred')
        .then(function (data) {
            console.log('Taptic Impact Occurred', data);
        })
        .catch(function (error) {
            console.error('Taptic Impact Occurred Error', error);
        });
}

function TapticNotificationOccurred() {
    vkBridge.send('VKWebAppTapticNotificationOccurred')
        .then(function (data) {
            console.log('Taptic Notification Occurred', data);
        })
        .catch(function (error) {
            console.error('Taptic Notification Occurred Error', error);
        });
}

function TapticSelectionChanged() {
    vkBridge.send('VKWebAppTapticSelectionChanged')
        .then(function (data) {
            console.log('Taptic Selection Changed', data);
        })
        .catch(function (error) {
            console.error('Taptic Selection Changed Error', error);
        });
}

function AccelerometerStart() {
    vkBridge.send('VKWebAppAccelerometerStart')
        .then(function (data) {
            console.log('Accelerometer Started', data);
        })
        .catch(function (error) {
            console.error('Accelerometer Start Error', error);
        });
}

function AccelerometerStop() {
    vkBridge.send('VKWebAppAccelerometerStop')
        .then(function (data) {
            console.log('Accelerometer Stopped', data);
        })
        .catch(function (error) {
            console.error('Accelerometer Stop Error', error);
        });
}

function DeviceMotionStart() {
    vkBridge.send('VKWebAppDeviceMotionStart')
        .then(function (data) {
            console.log('Device Motion Started', data);
        })
        .catch(function (error) {
            console.error('Device Motion Start Error', error);
        });
}

function DeviceMotionStop() {
    vkBridge.send('VKWebAppDeviceMotionStop')
        .then(function (data) {
            console.log('Device Motion Stopped', data);
        })
        .catch(function (error) {
            console.error('Device Motion Stop Error', error);
        });
}

function GyroscopeStart() {
    vkBridge.send('VKWebAppGyroscopeStart')
        .then(function (data) {
            console.log('Gyroscope Started', data);
        })
        .catch(function (error) {
            console.error('Gyroscope Start Error', error);
        });
}

function GyroscopeStop() {
    vkBridge.send('VKWebAppGyroscopeStop')
        .then(function (data) {
            console.log('Gyroscope Stopped', data);
        })
        .catch(function (error) {
            console.error('Gyroscope Stop Error', error);
        });
}

function ShowInviteBox() {
    vkBridge.send('VKWebAppShowInviteBox')
        .then(function (data) {
            console.log('Invite Box Shown', data);
        })
        .catch(function (error) {
            console.error('Show Invite Box Error', error);
        });
}

function ShowLeaderBoardBox(user_result) {
    var params = {};
    if (user_result !== undefined && user_result !== null) {
        params.user_result = user_result;
    }
    vkBridge.send('VKWebAppShowLeaderBoardBox', params)
        .then(function (data) {
            if (data.success) {
                console.log('Leader Board Box shown', data);
                SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
            }
        })
        .catch(function (error) {
            console.error('Show Leader Board Box Error', error);
            SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function ShowRequestBox() {
    vkBridge.send('VKWebAppShowRequestBox')
        .then(function (data) {
            console.log('Request Box Shown', data);
        })
        .catch(function (error) {
            console.error('Show Request Box Error', error);
        });
}
