var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css');
var connect = require('gulp-connect');
// 压缩js
gulp.task('minJs',function(){
    gulp.src(['./a.js','./b.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
})

// 合并
gulp.task('concat',function(){
    gulp.src(['./js/a.js','./js/b.js'])
        .pipe(concat('c.js'))
        .pipe(gulp.dest('./'))
})

// 压缩css
gulp.task('minCss',function(){
    gulp.src('./style.css')
        .pipe(mincss())
        .pipe(gulp.dest('./css'))
})

// 启动服务
gulp.task('httpServer',function(){
    connect.server({
        port:8008,
        livereload: true
    })
})
gulp.task('default',['minJs','concat','minCss','httpServer'])