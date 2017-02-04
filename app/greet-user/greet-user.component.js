angular.module('greetUserModule').
    component('greetUser', {
        template: 'Hello, {{$ctrl.user}}!!',
        controller: function GreetUserController() {
            this.user = 'world';
        }
    });