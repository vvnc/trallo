angular.module('TodoList').component('ttlApiKey', {
    templateUrl: '/Templates/app/TtlApiKey.html',
    controller: function () {
        let self = this;
        const apiKeyLocalStorageKey = 'trello_api_key';
        self.key = localStorage.getItem(apiKeyLocalStorageKey);

        self.saveKey = function () {
            console.log(self.key);
            localStorage.setItem(apiKeyLocalStorageKey, self.key);
        }
    }
});