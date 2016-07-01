'use strict';

var JokeBot = require("./main.js");

var apiRequest = {
    context: {
        path: '/',
        method: 'GET'
    },
    queryString: { }
};

var contextStub = {
    succeed: (x) => console.log("Successful result:", x),
    fail: (x) => console.error("Failing result:", x),
}

JokeBot.handler(apiRequest, contextStub);
