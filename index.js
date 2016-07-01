'use strict';

var getJoke = require("jokes");
var GithubApi = require("github");
var github = new GithubApi();

exports.handler = function (event, context) {
    github.authenticate({
        type: "oauth",
        token: event.github_token
    });

    github.activity.getNotifications({
    }).then((notifications) => {
        if (notifications.length > 0) {
            return Promise.all(notifications.filter((notification) => {
                return notification.unread === true &&
                       notification.reason === 'mention' &&
                       notification.subject.type === 'Issue';
            }).map((notification) => {
                var issueUrl = notification.subject.url;
                var issueMatch = /api.github.com\/repos\/(\w+)\/(\w+)\/issues\/(\d+)/.exec(issueUrl);
                if (issueMatch) {
                    var username = issueMatch[1];
                    var repo = issueMatch[2];
                    var issueId = issueMatch[3];

                    return github.issues.createComment({
                        user: username,
                        repo: repo,
                        number: issueId,
                        body: getJoke().text
                    });
                } else {
                    throw new Error(`Failed to match issue URL: ${issueUrl}`);
                }
            })).then(() => {
                // Is there a race condition here? (if thread gets a new message between above and here)
                return Promise.all(notifications.map((notification) => {
                    return github.activity.setNotificationThreadSubscription({
                        id: notification.id,
                        ignored: true
                    });
                }).concat(notifications.map((notification) => {
                    return github.activity.markNotificationThreadAsRead({ id: notification.id });
                })));
            });
        }
    }).then(() => context.succeed()).catch(context.fail);
}
