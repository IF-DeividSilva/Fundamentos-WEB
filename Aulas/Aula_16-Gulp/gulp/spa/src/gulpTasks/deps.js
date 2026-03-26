const gulp = require('gulp')
const uglifycss = require('gulp-uglify')
const concat = require('gulp-concat')

function depsCSS(){
    // concat the files dependencies from font-awesome to assets/css with the coments 
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments" : false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(cb){
    // copy the fonts to folder assests/fonts
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assests/fonts'))
}


module.exports = {
    depsFonts, depsCSS
}