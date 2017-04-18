const gulp = require( 'gulp' );
const plumber = require('gulp-plumber');
const sass = require( 'gulp-sass');
const notify = require( 'gulp-notify' );
const concat = require( 'gulp-concat' );
const uglify = require( 'gulp-uglify' );
const autoprefixer = require( 'gulp-autoprefixer' );

gulp.task('styles', () => {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: [ 'last 2 versions', '> 2%']
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles'))
});

gulp.task( 'watch', function(){

	gulp.watch( './src/styles/**/*.scss', [ 'styles' ]);

});

gulp.task('default', [ 'styles', 'watch' ] );
