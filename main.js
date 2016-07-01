'use strict';

var getJoke = require("jokes");

exports.handler = function (event, context) {
    console.log(event);
    console.log(getJoke().text);
    context.succeed("Joked!");
}
