const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    // folder of file
    return gulp.src('src/sass/index.scss')
        // case errors
        .pipe(sass().on('error', sass.logError))
        // concat every things of file in one line
        .pipe(uglifycss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}   

// function for make a copy of index.html to folder build
function copiarHTML(){
    // folder of file 
    return gulp.src('src/index.html')
        // cpy for outher folder
        .pipe(gulp.dest('build'))
}

// run two functions in parallel
exports.default = parallel(transformacaoCSS, copiarHTML)