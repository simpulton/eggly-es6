'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';

let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

// map of all paths
let paths = {
  js: resolveToApp('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root
};

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root }
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('default', (done) => {
  sync('serve', 'watch', done);
});
