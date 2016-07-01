'use strict';

var JokeBot = require("./index.js");
var event = require("./trigger-jokebot.json");

var contextStub = {
    succeed: (x) => console.log("Successful result:", x),
    fail: (x) => console.error("Failing result:", x),
}

JokeBot.handler(event, contextStub);
