/**
 * Created by hsyed on 12/12/14.
 */
var config = require('../config/development')
, palette = require('../modules/palette')

module.exports = {
    method: function (req) {
        var host = req.headers.host
            , separator = ':'
            , separatorIndex = config.searchString(host, separator)
            , hostname = config.getString(host, 0, separatorIndex)
            , currentPort = config.getString(host, parseInt(separatorIndex, 10), host.length)
            , liveReloadPort = config.liveReload.port
            , liveReloadScript = '//' + hostname + ':' + liveReloadPort + '/livereload.js'

        return {
            liveReloadScript: liveReloadScript,
            colorPalette: palette(),
            port: currentPort
        }
    }
}