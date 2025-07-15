const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');

// Note: this only removes these paths - use with caution!
sh.rm('-rf', `${destPath}/assets`)
sh.rm('-rf', `${destPath}/css`)
sh.rm('-rf', `${destPath}/js`)
sh.rm('-rf', `${destPath}/index.html`)
