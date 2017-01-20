// Added font-awesome as custom script

// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyAssets: {
    src: ['/assets/**/*'],
    dest: '/assets'
  },
  copyIndexContent: {
    src: ['/index.html', '/manifest.json', '/service-worker.js'],
    dest: ''
  },
  copyFonts: {
    src: ['/node_modules/ionicons/dist/fonts/**/*', '/node_modules/ionic-angular/fonts/**/*'],
    dest: '/assets/fonts'
  },
  copyPolyfills: {
    src: ['/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: ''
  },
  copyFontawesomeFonts: {
    src: ['/node_modules/font-awesome/fonts/**/*'],
    dest: '/assets/fonts'
  },
  copyFontawesomeCss: {
    src: ['/node_modules/font-awesome/css/font-awesome.min.css'],
    dest: '/assets/css'
  },
}
