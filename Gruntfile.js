'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    meta: {
      package: grunt.file.readJSON('package.json'),
      src: {
        main: 'src/main',
        test: 'src/test'
      },
      bin: {
        coverage: 'bin/coverage'
      }
    },
    jasmine: {
      coverage: {
        src: ['<%= meta.src.main %>/js/**/*.js'],
        // excludes: ['<%= meta.src.main %>/js/**/*test.js'],
        options: {
          junit: {
            path: 'junit-report/raw',
            consolidate: true
          },          
          specs: '<%= meta.src.test %>/js/**/*.js',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: '<%= meta.bin.coverage %>/coverage.json',
            report: [
              {
              type: 'html',
              options: {
                dir: '<%= meta.bin.coverage %>/html'
              }
            },
            {
              type: 'lcov',
              options: {
                dir: '<%= meta.bin.coverage %>/lcov'
              }
            },
            {
              type: 'cobertura',
              options: {
                dir: '<%= meta.bin.coverage %>/cobertura'
              }
            },
            {
              type: 'text-summary'
            }
            ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test:coverage', ['jasmine:coverage']);
};
