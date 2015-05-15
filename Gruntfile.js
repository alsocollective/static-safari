module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'safari/static/css/main.css': ['safari/static/scss/menu.scss'], // 'destination': 'source'
				}
			}
		},
		watch: {
			files: ['safari/static/scss/*'],
			tasks: ['sass']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
};