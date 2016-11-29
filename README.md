# JokeBot

JokeBot is a github bot, on AWS Lambda, that sends you jokes on demand.

Want to give it a go? Just mention @jokebot on any comment or PR, and you should get a reply within a minute or so. Feel free to open or reply to issues on this PR to test it.

## Why?

This is a demo project for [DevBot](https://github.com/pimterry/dev-bot), a framework for building chat-bot-based developer tooling. With just the code here, you can get a basic Github bot up and running and easily deployable.

You can give this a go yourself if you like:

### Try this locally
* Check out this project
* `npm install`
* Copy `bot.env.TEMPLATE` to `bot.env`, and add the Github token for your user your bot should use
* @mention your bot on Github, and run `npm run start` locally to do a single poll for mentions. Your bot should reply! (hilariously)

### Deploy this to AWS
* Make some [AWS credentials available](https://blogs.aws.amazon.com/security/post/Tx3D6U6WSFGOK2H/A-New-and-Standardized-Way-to-Manage-Credentials-in-the-AWS-SDKs) (typically: create AWS_SECRET_KEY_ID and AWS_SECRET_ACCESS_KEY environmental variables).
* Run `npm run deploy` to deploy and schedule your bot on AWS Lambda.
