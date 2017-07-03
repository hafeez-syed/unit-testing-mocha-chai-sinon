/**
 * Created by Hafeez on 9/12/2014.
 */

var fs = require('fs')

function getData() {
    return JSON.parse( fs.readFileSync(process.cwd() + '/config/colorPalette.json').toString() );
}

module.exports = function (fetch) {
    fetch = fetch || getData;
    var palette = fetch()

    if(!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }
    return palette;
}