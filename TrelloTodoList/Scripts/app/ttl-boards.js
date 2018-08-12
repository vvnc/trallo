function TtlBoardsCtrl($http) {
    let self = this;
    self.boards = null;
    self.errorMessage = null;

    self.getBoards = function () {
        Trello.authorize({
            name: "TrelloAngularJS"
        });

        let key = localStorage.getItem('trello_api_key');
        let token = localStorage.getItem('trello_token');
        let req = {
            method: 'GET',
            url: `https://api.trello.com/1/member/me/boards?key=${key}&token=${token}`,
        }

        let onSuccess = function (value) {
            self.errorMessage = null;
            self.boards = value.data;
        };

        let onError = function (value) {
            self.boards = null;
            self.errorMessage = JSON.stringify(value, null, 4);
        };

        $http(req).then(onSuccess, onError);
    };

    self.$onInit = function () {
        self.getBoards();
    };
}

angular.module('TodoList').component('ttlBoards', {
    templateUrl: "/Templates/app/TtlBoards.html",
    controller: ['$http', TtlBoardsCtrl]
});