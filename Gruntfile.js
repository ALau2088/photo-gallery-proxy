module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %> */|n'
      // },
      build: {
        src: 'src/bundle.js',
        dest: 'public/<%= pkg.name %>.min.js'
        // src: 'http://ec2-13-57-228-44.us-west-1.compute.amazonaws.com:3001/bundle.js',
        // src: 'src/bundle.js',
        // dest: 'public/bundle.min.js'
      }
    }
  })

  // Load the plugin that provides the "uglify" task
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};