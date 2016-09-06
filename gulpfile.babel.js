'use strict';

import gulp from 'gulp';
import path from 'path';
const browserSync = require('browser-sync').create();
// import serve from 'browser-sync';
// import sync from 'run-sequence';

const reload = () => browserSync.reload();
const root = 'client';

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

// map of all paths
const paths = {
  js: resolveToApp('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root
};

gulp.task('reload', (done) => {
  reload();
  done();
});

gulp.task('serve', () => {
  browserSync.init({
    port: process.env.PORT || 3000,
    open: true,
    server: { baseDir: root }
  });
});

gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['reload']);
});

gulp.task('default', ['watch']);
