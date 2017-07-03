/**
 * Created by Hafeez on 7/12/2014.
 */
module.exports = {
    environment:{
        dev:{
            url: 'localhost',
            port: 9000
        }
    },
    liveReload: {
        port: 35729
    }
    , searchString: function (str, char) {
        return str.search(char)
    }
    , getString: function(str, start, end) {
        var from = start || 0
            , to = end || 0
            , string = str
        return string.substring(from, to)
    }
    , getColorPalette: function() {
        return ['#dddddd', '#cccccc', '#eeeeee', '#999999', '#666666', '#333333', '#000000', '#999ccc', '#000999']
    }
}