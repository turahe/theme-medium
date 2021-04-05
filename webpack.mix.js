const mix = require('laravel-mix')
const path = require('path');
let directory = path.basename(path.resolve(__dirname));

const source = 'resources/themes/' + directory + '/assets';
const dist = 'public/assets/' + directory;
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js(source + '/js/app.js', dist + '/js')
    .sass(source + '/sass/app.scss', dist + '/css')
