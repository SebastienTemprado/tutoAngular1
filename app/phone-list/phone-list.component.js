// Register `phoneList` component, along with its associated controller and template
angular.module('phoneListModule').
    component('phoneList', {
//        template:
//        '<ul>' +
//          '<li ng-repeat="phone in $ctrl.phones">' +
//            '<span>{{phone.name}}</span>' +
//            '<p>{{phone.snippet}}</p>' +
//          '</li>' +
//        '</ul>',
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;
            
            $http.get("/resources/phones.json").then(
                function success(response) {
                    self.phones = response.data;
                },
                function error(response) {
                    console.log("Error on phones.json : " + response);
                } 
            );
            self.orderProp = 'age';
        }]
    });