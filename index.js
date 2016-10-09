'use strict';

var getJoke = require("jokes");
var devBot = require("dev-bot");

devBot.connectGithub({
    type: "oauth",
    token: process.env.GITHUB_TOKEN
});

exports.onMention = function (mention, respondCallback) {
    respondCallback(getJoke().text);
}
