const mix = require('laravel-mix');

const path = require('path');
const fs = require('fs');


const mixDir = (method, source, output, ignoredFiles = []) => {
    source += (source.slice(-1) === '/' ? '' : '/');
    output += (output.slice(-1) === '/' ? '' : '/');
    fs.readdirSync(source).forEach(file => {
      const sourcePath = source + file;
      const sourceStat = fs.statSync(sourcePath);
      if (sourceStat.isDirectory()) {
        mixDir(method, sourcePath, output + file);
      } else if (!((method === 'sass' && file.startsWith('_')) || ignoredFiles.includes(file) )) {
        if (file.split('.').pop().trim() === 'json') {
          mix.copy(sourcePath, output);
        } else if (!source.endsWith('/lib/')) {
          let outputPath = output + file;
          const extName = path.extname(outputPath);
          if (extName !== '.vue') {
              mix[method](sourcePath, output);
          }
        }
      }
    });
};

mix.copyDirectory('resources/img', 'public/img')
   .copyDirectory('resources/fonts', 'public/fonts')
   .copyDirectory('node_modules/@popperjs/core/dist/cjs/popper.js.map', 'public/js')
   .copyDirectory('node_modules/summernote/dist/summernote.js.map', 'public/js');
mixDir('js','resources/js','public/js',[ 'bootstrap.js','popper.js.map']);
mixDir('sass','resources/scss','public/css');

mix.js([
    'node_modules/jqvmap/dist/jquery.vmap.js',
    'node_modules/jqvmap/dist/maps/jquery.vmap.world.js'
], 'public/js/vendor/jquery.vmap.js');

mix.postCss('node_modules/owl.carousel/dist/assets/owl.carousel.min.css', 'public/css');

mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    files: [
        'resources/views/*.php',
        'public/js/**/*.js',
        'public/css/**/*.css'
    ]
});
mix.disableNotifications();

