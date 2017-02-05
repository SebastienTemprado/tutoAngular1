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
        controller: ['Phone', function PhoneListController(Phone) {
            var self = this;
            
            this.phones = Phone.query();
            self.orderProp = 'age';
        }]
    });