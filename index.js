var unit = require('parse-unit')
var lerp = require('lerp')

var splitter = /[,\s]+/i
var tmpA = [0, '']
var tmpB = [0, '']

function lerpCSS(value1, value2, t) {
    var v1 = unit(value1, tmpA)
    var v2 = unit(value2, tmpB)
    var noStr = v1[1].length === 0 || v2[1].length === 0
    if (noStr || v1[1] === v2[1]) {
        var ret = lerp(v1[0], v2[0], t)
        var suffix = v1[1].length > v2[1].length ? v1[1] : v2[1]
        return ret + suffix
    } else
        throw new Error('units do not match')
}

module.exports = function(value1, value2, t) {
    var v1 = value1.trim().split(splitter)
    var v2 = value2.trim().split(splitter)
    var len = Math.min(v1.length, v2.length)
    var out = ''
    for (var i=0; i<len; i++) {
        out += lerpCSS(v1[i], v2[i], t)
        if (i !== len-1)
            out += ' '
    }
    return out
}