var lerp = require('./')
var test = require('tape').test

test('interpolates', function(t) {
    t.equal(lerp('50% 50%', '0% 0%', 0.5), '25% 25%')
    t.equal(lerp('50 50%', '0px 0%', 0.5), '25px 25%', 'result has suffixes')
    t.equal(lerp('50px 50%', '0px 0%', 0.5), '25px 25%')
    t.equal(lerp('1px', '4px', 0.5), '2.5px')
    t.equal(lerp('4px', '6px', 0.5), '5px')
    t.equal(lerp('4', '6', 0.25), '4.5')
    t.equal(lerp('10%', '20%', 0.5), '15%')
    t.equal(lerp('  320, 10%, 50%', '128, 50%,  60% ', 0.5), '224 30% 55%')
    t.end()
})