var config = require('./config/development')
    ,    env = config.environment
    module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            test: ['public/styles/**']
        },
        concurrent: {
            target: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    env: {
                        PORT: env.dev.port
                    },
                    cwd: __dirname,
                    ignored: ['node_modules/**'],
                    ext: 'js,md,css,jade,sass',
                    watchedExtensions: ['js', 'md', 'css', 'jade', 'sass'],
                    delayTime: 500,
                    legacyWatch: true
                }
            }
        },
        watch: {
            css: {
              files: [
                  'app/sass/**/*.sass'
              ],
              tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    '*.js',
                    'config/*.js',
                    'includes/*.js',
                    'modules/*.js',
                    'public/scripts/*.js',
                    'public/fontello/**/*.js'
                ],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: [
                    'views/*.jade'
                ],
                options: {
                    livereload: true
                }
            },
            fontello:{
                files: [
                    'public/fontello/config.json',
                    'public/fontello/**/*.js',
                    'public/fontello/css/*.css'
                ],
                tasks: ['fontello'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            target: {
                src: [
                    '*.js',
                    'config/*.js',
                    'includes/*.js',
                    'modules/*.js',
                    'public/scripts/*.js'
                ]
            }
        },
        fontello: {
            dist: {
                options: {
                    config  : 'public/fontello/config.json',
                    fonts   : 'public/fontello/font',
                    styles  : 'public/fontello/css',
                    scss    : false,
                    force   : true
                }
            }
        },
        sass: {
            compile: {
                files: {
                    'public/styles/style.css': 'app/sass/style.sass'
                }
            }
        }
/*
        mochaRunner: {
            all: {
                scripts: ['test*/
/*.js']
            }
        },
        // opens the runner page to run the tests
        mocha2: {
            options: {
                run: true,
                reporter: 'Spec'
            },
            test: {
                options: {
                    // url to the runner page served by mochaRunner
                    urls: ['http://localhost:8000']
                }
            }
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    reporter: 'XUnit',
                    log: true,
                    urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
                }
                //dest: './test/output/xunit.out'
            }
        }
*/
    })

    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-fontello')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-newer')
/*
    grunt.loadNpmTasks('grunt-mocha')
    grunt.loadNpmTasks('grunt-mocha-runner')
*/

    grunt.registerTask('default', ['clean', 'jshint', 'sass', 'fontello', 'concurrent:target'])
    grunt.registerTask('test', ['mocha'])
}