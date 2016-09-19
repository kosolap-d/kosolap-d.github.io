module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dest/main.js',
            },
        },
        uglify: {
            dist: {
              src: ['js/dest/main.js'],
              dest: 'js/dest/main.min.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('dev', ['concat']);

};
