//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './app',

        // list of files / patterns to load in the browser
        // need to load app files before spec files !!!!!       
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app.module.js',
            'greet-user/greet-user.module.js',
            'greet-user/greet-user.component.js',
            'phone-list/phone-list.module.js',
            'phone-list/phone-list.component.js',
            'phone-detail/phone-detail.module.js',
            'phone-detail/phone-detail.component.js',
            'core/core.module.js',
            'core/checkmark/checkmark.filter.js',
            '**/*.js'
        ],

        // list of files to exclude
        exclude: [
            'bower_components/**/!(angular.js|angular-route.js|angular-mocks.js)',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome', 'Firefox'],

        plugins: [
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine'
        ]

    });
};