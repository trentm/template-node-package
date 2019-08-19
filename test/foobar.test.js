/*
 * Foobar tests.
 */

var test = require('tap').test;
var foobar = require('../');


// ---- tests

test('foobar', function _(t) {
    var f = new foobar.FooBar();
    t.ok(f);
    t.end();
});
