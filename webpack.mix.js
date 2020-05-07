let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./')
    .js('src/js/app.js', 'dist/js').sourceMaps()
    .sass('src/scss/app.scss', 'dist/css').options({
        processCssUrls: false
    }).sourceMaps();

// Only do cache-busting in production
if (mix.inProduction()) {
    mix.version();
}
