require('dotenv').load();
const express = require('express');
const request = require('request');

const app = express();

app.post('/send', (req, res) => {
  var Slack = require('slack-node');
 
  webhookUri = process.env.SLACK_WEBHOOK_URL;
  
  slack = new Slack();
  slack.setWebhook(webhookUri);
  
  slack.webhook({
    channel: "#general",
    username: 'Countdown Bot',
    text: 'I\'ll be posting daily reminders before Concatenate Conference'
  }, function(err, response) {
    console.log(response);
  });
});

app.listen(2450, () => {
  console.log('Server started!');
})

