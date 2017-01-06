module.exports = function(grunt){
	//프로젝트 설정 및 플러그인 초기화
	var localConfig = {
//			target: 'foundation/'
	};

	grunt.initConfig({
		dir: localConfig,
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			basic: {
				src: 'js/*.js',
				dest: 'build/js/foundation.min.js'
			}
		},
		uglify: {
			basic: {
				src: 'js/foundation.min.js',
				dest: 'build/js/foundation.min_beta.js'
			}
		},
                jshint: {
                        src: ['<%=dir.target %>build/js/*.js'],
			options: {
				reporter: 'checkstyle',
				reporterOutput: 'jshint.xml'
			}

                },
		 watch: {
                         js: {
                                files: 'js/*.js',
                                tasks: ['concat', 'jshint'],
			 }
		 }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['watch']);
};
