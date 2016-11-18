module.exports = function (grunt) {
    var path = require('path');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }]
                },
                files: [{
                    expand: true,
                    cwd: 'view/img/',
                    src: '**',
                    dest: 'view/img/dist'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // used to manipulate .jsps in prod
    grunt.loadNpmTasks('grunt-usemin');
    // used to include less file in dev environment
    grunt.loadNpmTasks('grunt-include-source');
    // used to move and minify images to dist/css/images
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    /**
     * Dev Build
     * jshint - all js files
     * ngtemplates - converts all html partials to js and caches them
     *
     */
    grunt.registerTask('dev-build', [
        //'ngtemplates',
        //'less:development',
        'imagemin:dynamic'
    ]);
};