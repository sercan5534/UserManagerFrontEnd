module.exports = function(config) {
    config.set({
 
        // base path, that will be used to resolve files and exclude
        basePath: './',
 
        // frameworks to use
        frameworks: ['jasmine'],
 
        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'app/app.module.js',
            'app/**/*.js',
            'test/**/*.js'
        ],
        
        // list of plugins
        plugins: [
			'phantomjs',
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-html-reporter',
			'karma-junit-reporter'
		],
        
        // list of files to exclude
        exclude: [
        ],
 
        // test results reporter to use
		reporters: ['progress', 'html', 'coverage', 'junit'],

		// xml list of unit tests
		junitReporter: {
			outputDir: 'build/junit', // results will be saved as $outputDir/$browserName.xml
			outputFile: 'junit-test-report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
			suite: '', // suite will become the package name attribute in xml testsuite element
			useBrowserName: false // add browser name to report and classes names
		},

		// visual coverage report
		coverageReporter: {
			reporters: [
				{
					type : 'cobertura',
					dir : 'build/coverage'
				},
				{
					type : 'html',
					dir : 'build/coverage'
				}
			]
		},

		// html list of karma tests
		htmlReporter: {
			outputDir: 'build/karma_html',
			templatePath: null,		// set if you moved jasmine_template.html
			focusOnFailures: true,		// reports show failures on start
			namedFiles: false,		// name files instead of creating sub-directories
			pageTitle: null,		// page title for reports; browser info by default
			urlFriendlyName: false,		// simply replaces spaces with _ for files/dirs
			reportName: ''
		},

        // web server port
        port: 9876,
 
        // enable / disable colors in the output (reporters and logs)
        colors: true,
 
        // level of logging
        logLevel: config.LOG_INFO,
 
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
 
        // Start these browsers
        browsers: ['PhantomJS'],
 
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
 
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
