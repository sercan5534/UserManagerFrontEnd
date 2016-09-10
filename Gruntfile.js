/**
 * 
 *  Grunt tasks
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapIncludeSources: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['app/app.module.js' ,'app/**/*.js'], //app.module.js must be defined firstly
                dest: 'assets/js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/css/style.min.css': ['assets/css/style.css', 'assets/css/responsive.css']
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'wspy/**/*.js', 'wspy-test/**/*.js']
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
	    dev: {
                browsers: ['Chrome'],
                singleRun: false
            },
            prod: {
                browsers: ['PhantomJS'],
                singleRun: true,
                preprocessors: {'app/**/*.js': ['coverage']}
            }
        },
        watch: {
            scripts: {
                files: ['app/**/*.js', 'app-test/**/*.js', 'assets/css/style.css','assets/css/responsive.css'],
                tasks: ['jshint', 'uglify', 'cssmin'],
                options: {
                    spawn: false
                }
            }
	    },
      	/*
      	//If you want create a war file for an artifactory tool, fill below
        war: {
	        options:{}
	        files:[]
        }*/
    });

    // Load plugin for task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify','cssmin','karma:prod']);

};

