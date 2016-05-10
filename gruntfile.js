module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig({

        // Grunt variables
        nookuFrameworkAssetsPath: 'code/libraries/joomlatools/library/resources/assets',
        joomlatoolsFrameworkAssetsPath: 'code/libraries/joomlatools/component/koowa/resources/assets',

        // Iconfont
        webfont: {
            icons: {
                src: '<%= nookuFrameworkAssetsPath %>/icons/svg/*.svg',
                dest: '<%= nookuFrameworkAssetsPath %>/fonts/koowa-icons',
                destCss: '<%= nookuFrameworkAssetsPath %>/scss/koowa/utilities',
                options: {
                    font: 'koowa-icons',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: '<%= nookuFrameworkAssetsPath %>/icons/template.css',
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
                    '<%= nookuFrameworkAssetsPath %>/css/admin.css': '<%= nookuFrameworkAssetsPath %>/scss/admin.scss',
                    '<%= nookuFrameworkAssetsPath %>/css/bootstrap.css': '<%= nookuFrameworkAssetsPath %>/scss/bootstrap.scss',
                    '<%= nookuFrameworkAssetsPath %>/css/debugger.css': '<%= nookuFrameworkAssetsPath %>/scss/debugger.scss',
                    '<%= nookuFrameworkAssetsPath %>/css/dumper.css': '<%= nookuFrameworkAssetsPath %>/scss/dumper.scss',
                    '<%= nookuFrameworkAssetsPath %>/css/site.css': '<%= nookuFrameworkAssetsPath %>/scss/site.scss',

                    // Joomlatools Framework
                    '<%= joomlatoolsFrameworkAssetsPath %>/css/admin.css': '<%= joomlatoolsFrameworkAssetsPath %>/scss/admin.scss',
                    '<%= joomlatoolsFrameworkAssetsPath %>/css/component.css': '<%= joomlatoolsFrameworkAssetsPath %>/scss/component.scss',
                    '<%= joomlatoolsFrameworkAssetsPath %>/css/isis.css': '<%= joomlatoolsFrameworkAssetsPath %>/scss/isis.scss',
                    '<%= joomlatoolsFrameworkAssetsPath %>/css/hathor.css': '<%= joomlatoolsFrameworkAssetsPath %>/scss/hathor.scss'
                }
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,

                "dest": "<%= nookuFrameworkAssetsPath %>/js/build/modernizr.js",
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
                "customTests" : [],
                "classPrefix": "k-"
            }
        },


        // Concatenate files

        concat: {
            js: {
                files: {
                    '<%= nookuFrameworkAssetsPath %>/js/build/admin.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/select2/dist/js/select2.full.min.js',
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                        'node_modules/footable/dist/footable.min.js',
                        'node_modules/floatthead/dist/jquery.floatThead.min.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/overflowing.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/tabbable.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/off-canvas-menu.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/main.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/jquery.js': [
                        'node_modules/jquery/dist/jquery.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.noconflict.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/jquery.magnific-popup.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/jquery.validate.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/jquery-validation/dist/jquery.validate.js',
                        '<%= nookuFrameworkAssetsPath %>/js/jquery.validate.patch.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/koowa.select2.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/select2/dist/js/select2.full.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.select2.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/koowa.tree.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/jqtree/tree.jquery.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.tree.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/build/koowa.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        '<%= nookuFrameworkAssetsPath %>/js/jquery.ui.widget.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.scopebar.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.class.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.grid.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
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
                    '<%= nookuFrameworkAssetsPath %>/js/min/admin.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/select2/dist/js/select2.full.min.js',
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                        'node_modules/footable/dist/footable.min.js',
                        'node_modules/floatthead/dist/jquery.floatThead.min.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/overflowing.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/tabbable.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/off-canvas-menu.js',
                        '<%= nookuFrameworkAssetsPath %>/scripts/main.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/bootstrap.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/bootstrap.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/jquery.js': [
                        'node_modules/jquery/dist/jquery.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.noconflict.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/jquery.magnific-popup.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/jquery.validate.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/jquery-validation/dist/jquery.validate.js',
                        '<%= nookuFrameworkAssetsPath %>/js/jquery.validate.patch.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/koowa.datepicker.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/datepicker.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.datepicker.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/koowa.select2.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/select2/dist/js/select2.full.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.select2.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/koowa.tree.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        'node_modules/jqtree/tree.jquery.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.tree.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/modernizr.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/build/modernizr.js'
                    ],
                    '<%= nookuFrameworkAssetsPath %>/js/min/koowa.js': [
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.set.js',
                        '<%= nookuFrameworkAssetsPath %>/js/jquery.ui.widget.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.scopebar.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.class.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.grid.js',
                        '<%= nookuFrameworkAssetsPath %>/js/koowa.js',
                        '<%= nookuFrameworkAssetsPath %>/js/kquery.unset.js'
                    ]
                }
            }
        },


        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions', 'ie 11']
            },
            files: {
                nooku: {
                    expand: true,
                    flatten: true,
                    src: '<%= nookuFrameworkAssetsPath %>/css/*.css',
                    dest: '<%= nookuFrameworkAssetsPath %>/css/'
                },
                joomlatools: {
                    expand: true,
                    flatten: true,
                    src: '<%= joomlatoolsFrameworkAssetsPath %>/css/*.css',
                    dest: '<%= joomlatoolsFrameworkAssetsPath %>/css/'
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
                    '<%= nookuFrameworkAssetsPath %>/icons/svg/*.svg'
                ],
                tasks: ['webfont', 'sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    atBegin: false
                }
            },
            sass: {
                files: [
                    '<%= nookuFrameworkAssetsPath %>/scss/*.scss',
                    '<%= nookuFrameworkAssetsPath %>/scss/**/*.scss',
                    '<%= joomlatoolsFrameworkAssetsPath %>/scss/*.scss',
                    '<%= joomlatoolsFrameworkAssetsPath %>/scss/**/*.scss'
                ],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
            //,javascript: {
            //    files: [
            //        '<%= nookuFrameworkAssetsPath %>/scripts/*.js',
            //        '<%= nookuFrameworkAssetsPath %>/js/*.js',
            //        '!<%= nookuFrameworkAssetsPath %>/js/min/*.js'
            //    ],
            //    tasks: ['uglify', 'concat'],
            //    options: {
            //        interrupt: true,
            //        atBegin: true
            //    }
            //},
            //concat: {
            //    files: [
            //        '<%= nookuFrameworkAssetsPath %>/scripts/*.js',
            //        '<%= nookuFrameworkAssetsPath %>/js/*.js',
            //        '!<%= nookuFrameworkAssetsPath %>/js/min/*.js'
            //    ],
            //    tasks: ['concat'],
            //    options: {
            //        interrupt: true,
            //        atBegin: true
            //    }
            //}
        }


    });

    // The dev task will be used during development
    grunt.registerTask('javascript', ['modernizr', 'uglify', 'concat']);
    grunt.registerTask('default', ['shell', 'watch']);

};