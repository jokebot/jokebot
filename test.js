'use strict';

var JokeBot = require("./main.js");

var contextStub = {
    succeed: (x) => console.log("Successful result:", x),
    fail: (x) => console.error("Failing result:", x),
}

var event = {
    github_token: "123qweasd"
}

JokeBot.handler(event, contextStub);
