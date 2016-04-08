module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    jasmine_node: {
      api_entity_actions: {
        options: {
          coverage: {},
          forceExit: false,
          match: '.',
          matchAll: false,
          specFolders: ['node_modules/irisjs/test'],
          extensions: 'js',
          specNameMatcher: 'spec',
          captureExceptions: true,
          junitreport: {
            report: true,
            savePath: './build/reports/jasmine/',
            useDotNotation: true,
            consolidate: true
          }
        },
        src: ['**/*.js']
      }
    },
    casperjs: {
      options: {
        async: {
          parallel: false
        }
      },
      files: ['node_modules/irisjs/test/**/*Spec.js']
    }
  });
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-casperjs');
  grunt.registerTask('default', 'casperjs');

};