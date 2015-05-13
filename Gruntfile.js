module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'application/static/css/main.css': ['application/static/scss/menu.scss'], // 'destination': 'source'
				}
			}
		},
		watch: {
			files: ['application/static/scss/*'],
			tasks: ['sass']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
};