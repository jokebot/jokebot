'use strict';

var getJoke = require("jokes");
var GithubApi = require("github");
var github = new GithubApi();

exports.handler = function (event, context) {
    console.info("Triggering event", event);

    github.authenticate({
        type: "oauth",
        token: event.github_token
    });

    github.activity.getNotifications({
    }).then((notifications) => {
        if (notifications.length > 0) {
            console.log(getJoke().text);
            return github.activity.markNotificationThreadAsRead({ id: notifications[0].id });
        }
    }).then(() => context.succeed()).catch(context.fail);
}
