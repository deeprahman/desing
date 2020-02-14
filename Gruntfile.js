module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "less/main.less" // destination file and source file
        }
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
        src: ['src/js/*.js'],
        dest: 'js/script.min.js'
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: 'src/less/*.less',
        tasks: ['less']
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};
