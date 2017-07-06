/**
 * Created by Hafeez on 1/21/2015.
 */
module.exports = {
    convert: function (hex, callback) {
        setTimeout(function() {
            var func;
            var values;
            if (/^#/.test(hex)) {
                hex = hex.slice(1);
                var invalid = this.isInvalid(hex);
                
                if (invalid) {
                    return callback(new Error(invalid.reason));
                }
                values = this.arrayify(hex);
                func = this.parse;
            } else {
                //console.log('NUMBEERSSSSSS');
                func = this.arrayItems;
            }

            callback(null, func(values));
        }.bind(this), 50);
    },
    arrayify: function (hex) {
        var values = hex.split('');
        if (values.length === 3) {
            values = [values[0], values[0], values[1], values[1], values[2], values[2]];
        }
        return values;
    },
    isInvalid: function (hex) {
        if (hex.length !== 3 && hex.length !== 6) {
            return { reason: 'Invalid hexadecimal string' };
        }
    },
    parse: function (values) {
        var r = parseInt([values[0], values[1]].join(''), 16);
        var g = parseInt([values[4], values[5]].join(''), 16);
        var b = parseInt([values[2], values[3]].join(''), 16);
        return [r, g, b];
    },
    arrayItems: function(val) {
        return [1,2,3];
    }
};