# InspiroBotSlack
Slack integration with InspiroBot.me

You can use the currently hosted Heroku App (For Outgoing WebHooks only) below or you can clone the repo yourself and upload the Node.js app to your own private webserver and configure somewhat like it is below:

##Outgoing WebHooks
Within Slack Integrations choose Outgoing WebHooks and setup something similar to this:
![Image of Outgoing WebHooks Settings](http://i.imgur.com/fdLHTT4.png)

Your efforts will result in one happy excited team.
![Image of Outgoing WebHooks in Action](http://i.imgur.com/9dhHzkP.png)

##Incoming WebHook/Slash Command
Within Slack Integration Choose Slash Command and setup something similar to this:
![Image of Slash Command Settings](http://i.imgur.com/MzReYB7.png)

Then you can go to the Incoming WebHook Integration screen, set it up on any channel you would like and capture the URL, you'll need it in the format like: `/your/path/token` to be saved in the variable *INCOMING_WEBHOOK_PATH* like such on my Heroku application settings:
![Image of Heroku Settings](http://i.imgur.com/4MD1i5b.png)

Once it's configured, you can go ahead and test it out!
![Image of Incoming WebHooks in Action](http://i.imgur.com/YNeKT3l.png)

URL to hit: https://inspirobotslack.herokuapp.com/inspirobot

Image for icon: http://inspirobot.me/website/images/inspirobot-dark-green.png
