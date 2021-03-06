/**
 * optimize css in place for production
 * @tasks/optimize-css
 */
'use strict';

var uglify = require('gulp-uglify');
const sreplace = require('gulp-string-replace');
let replaceOptions = {logs: {enabled: false}};
/**
 * @param gulp - function
 * @param options - object
 * options.src : Directory of images to optimize.
 * options.dist : Output directory.
 * @returns {Function}
 */
module.exports = function(gulp,  options, flags) {
  return function() {
    return gulp.src(options.js.src)
        .pipe(sreplace(/iframe.src = 'javascript:';/g, "iframe.src = '';",replaceOptions))
      .pipe(uglify({
        'compress':{'drop_console':!flags.sourcemap},
        'ie8':true,
        'keep_fnames':'true'
      
      }))

      .pipe(gulp.dest(options.dist))

  };
};
