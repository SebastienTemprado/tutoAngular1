describe('PhoneList', function () {

    beforeEach(module('phoneListModule'));

    describe('PhoneListController', function () {
        var $httpBackend, ctrl;
        
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/resources/phones.json')
                        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('phoneList');
        }));
        
        it('should create a `phones` model with some phones got from phones.json', function() {
            jasmine.addCustomEqualityTester(angular.equals);
            expect(ctrl.phones).toEqual([]);
            
            $httpBackend.flush();
            
            expect(ctrl.phones.length).toBe(2);
            expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });  
        
        it('should set a default value for the `orderProp` model', inject(function ($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.orderProp).toBe('age');
        }));
    });
    
    
    // Test the controller
//    describe('PhoneListController', function() {
//    var ctrl;
//
//    beforeEach(inject(function($componentController) {
//      ctrl = $componentController('phoneList');
//    }));
//
//    it('should create a `phones` model with 3 phones', function() {
//      expect(ctrl.phones.length).toBe(3);
//    });
//
//    it('should set a default value for the `orderProp` model', function() {
//      expect(ctrl.orderProp).toBe('age');
//    });

});