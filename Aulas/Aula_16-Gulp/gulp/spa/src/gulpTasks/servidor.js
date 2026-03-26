const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb) {
    // info of what file it is watch (all htmls, csss, jss and imgs)
    // use for automated what you update and save the gulp make the reload..
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

function servidor(cb) {
return gulp.src('build')
    // set the parameters of web-server
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true,
    }))
}

module.exports = {
    monitorarArquivos, servidor
}