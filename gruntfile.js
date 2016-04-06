module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig({

        // Grunt variables
        nookuFrameworkPath: 'code/libraries/joomlatools/library/resources/assets',
        joomlatoolsFrameworkPath: 'code/libraries/joomlatools/component/koowa/resources/assets',

        // Iconfont
        webfont: {
            icons: {
                src: '<%= nookuFrameworkPath %>/icons/svg/*.svg',
                dest: '<%= nookuFrameworkPath %>/fonts/koowa-icons',
                destCss: '<%= nookuFrameworkPath %>/scss/utilities',
                options: {
                    font: 'koowa-icons',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: '<%= nookuFrameworkPath %>/icons/template.css',
                    htmlDemo: false
                }
            }
        },


        // Compile sass files
        sass: {
            options: {
                outputStyle: 'compact'
            },
            dist: {
                files: {

                    // Nooku Framework
                    '<%= nookuFrameworkPath %>/css/admin.css': '<%= nookuFrameworkPath %>/scss/admin.scss',
                    '<%= nookuFrameworkPath %>/css/bootstrap.css': '<%= nookuFrameworkPath %>/scss/bootstrap.scss',
                    '<%= nookuFrameworkPath %>/css/debugger.css': '<%= nookuFrameworkPath %>/scss/debugger.scss',
                    '<%= nookuFrameworkPath %>/css/dumper.css': '<%= nookuFrameworkPath %>/scss/dumper.scss',
                    '<%= nookuFrameworkPath %>/css/site.css': '<%= nookuFrameworkPath %>/scss/site.scss',

                    // Joomlatools Framework
                    //'<%= joomlatoolsFrameworkPath %>/css/admin.css': '<%= joomlatoolsFrameworkPath %>/scss/admin.scss',
                    //'<%= joomlatoolsFrameworkPath %>/css/isis.css': '<%= joomlatoolsFrameworkPath %>/scss/isis.scss',
                    //'<%= joomlatoolsFrameworkPath %>/css/hathor.css': '<%= joomlatoolsFrameworkPath %>/scss/hathor.scss'
                }
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,

                "dest": "<%= nookuFrameworkPath %>/js/build/modernizr.js",
                "options": [
                    "html5shiv",
                    "prefixedCSS",
                    "setClasses"
                ],
                "uglify": false,
                "tests": [
                    "appearance",
                    "checked",
                    "flexbox",
                    "flexboxlegacy",
                    "flexboxtweener",
                    "flexwrap"
                ],
                "crawl" : false,
                "customTests" : []
            }
        },

        "string-replace": {
            inline: {
                files: {
                    "<%= nookuFrameworkPath %>/js/build/modernizr.js": "<%= nookuFrameworkPath %>/js/build/modernizr.js"
                },
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: "'classPrefix' : ''",
                            replacement: "'classPrefix' : 'k-'"
                        }
                    ]
                }
            }
        },


        // Concatenate files

        concat: {
            js: {
                files: {
                    '<%= nookuFrameworkPath %>/js/build/admin.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/select2/dist/js/select2.full.min.js',
                        'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
                        'bower_components/footable/dist/footable.min.js',
                        'bower_components/floatThead/dist/jquery.floatThead.min.js',
                        '<%= nookuFrameworkPath %>/scripts/overflowing.js',
                        '<%= nookuFrameworkPath %>/scripts/tabbable.js',
                        '<%= nookuFrameworkPath %>/scripts/off-canvas-menu.js',
                        '<%= nookuFrameworkPath %>/scripts/main.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/jquery.js': [
                        'bower_components/jquery/dist/jquery.js',
                        '<%= nookuFrameworkPath %>/js/koowa.noconflict.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/jquery.magnific-popup.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/jquery.validate.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/jquery-validation/dist/jquery.validate.js',
                        '<%= nookuFrameworkPath %>/js/jquery.validate.patch.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/koowa.select2.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/select2/dist/js/select2.full.js',
                        '<%= nookuFrameworkPath %>/js/koowa.select2.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/koowa.tree.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/jqtree/tree.jquery.js',
                        '<%= nookuFrameworkPath %>/js/koowa.tree.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/build/koowa.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        '<%= nookuFrameworkPath %>/js/koowa.class.js',
                        '<%= nookuFrameworkPath %>/js/koowa.grid.js',
                        '<%= nookuFrameworkPath %>/js/koowa.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ]
                }
            }
        },

        // Uglify
        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'some' // preserve @license tags
            },
            build: {
                files: {
                    '<%= nookuFrameworkPath %>/js/min/admin.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/select2/dist/js/select2.full.min.js',
                        'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
                        'bower_components/footable/dist/footable.min.js',
                        'bower_components/floatThead/dist/jquery.floatThead.min.js',
                        '<%= nookuFrameworkPath %>/scripts/overflowing.js',
                        '<%= nookuFrameworkPath %>/scripts/tabbable.js',
                        '<%= nookuFrameworkPath %>/scripts/off-canvas-menu.js',
                        '<%= nookuFrameworkPath %>/scripts/main.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/bootstrap.js': [
                        '<%= nookuFrameworkPath %>/js/bootstrap.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/jquery.js': [
                        'bower_components/jquery/dist/jquery.js',
                        '<%= nookuFrameworkPath %>/js/koowa.noconflict.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/jquery.magnific-popup.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/jquery.validate.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/jquery-validation/dist/jquery.validate.js',
                        '<%= nookuFrameworkPath %>/js/jquery.validate.patch.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/koowa.datepicker.js': [
                        '<%= nookuFrameworkPath %>/js/datepicker.js',
                        '<%= nookuFrameworkPath %>/js/koowa.datepicker.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/koowa.select2.js': [
                        '<%= nookuFrameworkPath %>/js/select2.js',
                        '<%= nookuFrameworkPath %>/js/koowa.select2.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/koowa.tree.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        'bower_components/jqtree/tree.jquery.js',
                        '<%= nookuFrameworkPath %>/js/koowa.tree.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/modernizr.js': [
                        '<%= nookuFrameworkPath %>/js/build/modernizr.js'
                    ],
                    '<%= nookuFrameworkPath %>/js/min/koowa.js': [
                        '<%= nookuFrameworkPath %>/js/kquery.set.js',
                        '<%= nookuFrameworkPath %>/js/koowa.class.js',
                        '<%= nookuFrameworkPath %>/js/koowa.grid.js',
                        '<%= nookuFrameworkPath %>/js/koowa.js',
                        '<%= nookuFrameworkPath %>/js/kquery.unset.js'
                    ]
                }
            }
        },


        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions', 'ie 11', 'ie 10', 'ie 9']
            },
            files: {
                nooku: {
                    expand: true,
                    flatten: true,
                    src: '<%= nookuFrameworkPath %>/css/*.css',
                    dest: '<%= nookuFrameworkPath %>/css/'
                },
                joomlatools: {
                    expand: true,
                    flatten: true,
                    src: '<%= joomlatoolsFrameworkPath %>/css/*.css',
                    dest: '<%= joomlatoolsFrameworkPath %>/css/'
                }
            }
        },


        // Shell commands
        shell: {
            updateCanIUse: {
                command: 'npm update caniuse-db'
            }
        },


        // Watch files
        watch: {
            fontcustom: {
                files: [
                    '<%= nookuFrameworkPath %>/icons/svg/*.svg'
                ],
                tasks: ['webfont', 'sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    atBegin: false
                }
            },
            sass: {
                files: [
                    '<%= nookuFrameworkPath %>/scss/*.scss',
                    '<%= nookuFrameworkPath %>/scss/**/*.scss',
                    '<%= joomlatoolsFrameworkPath %>/scss/*.scss',
                    '<%= joomlatoolsFrameworkPath %>/scss/**/*.scss'
                ],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            javascript: {
                files: [
                    '<%= nookuFrameworkPath %>/scripts/*.js',
                    '<%= nookuFrameworkPath %>/js/*.js',
                    '!<%= nookuFrameworkPath %>/js/min/*.js'
                ],
                tasks: ['uglify', 'concat'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            concat: {
                files: [
                    '<%= nookuFrameworkPath %>/scripts/*.js',
                    '<%= nookuFrameworkPath %>/js/*.js',
                    '!<%= nookuFrameworkPath %>/js/min/*.js'
                ],
                tasks: ['concat'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('javascript', ['modernizr', 'string-replace', 'uglify', 'concat']);
    grunt.registerTask('default', ['shell', 'watch']);

};