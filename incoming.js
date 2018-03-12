var request = require('request');

module.exports = function (req, res, next) {
  var errimage = 'http://inspirobot.me/website/images/inspirobot-dark-green.png';
  request('http://inspirobot.me/api?generate=true', function (error, response, body) {
    var botPayload = {
      channel : req.body.channel_id
    };
    if (!error && response.statusCode == 200) {
      botPayload.response_type = "in_channel";
      botPayload.text = "<@" + req.body.user_id + ">: " + req.body.command + " " + body;
      // send Payload
      send(botPayload, req.body.response_url, function (error, status, body) {
        if (error) {
          return next(error);
        } else if (status !== 200) {
          // inform user that our Incoming WebHook failed
          return next(new Error('Incoming WebHook: ' + status + ' ' + body));
        } else {
          return res.status(200).end();
        }
      });
    }
    else {
        botPayload.response_type = "ephemeral";
        botPayload.text = errimage;
      return res.status(200).json(botPayload);
    }
  });
};

function send (payload, responseUrl, callback) {
  request({
    uri: responseUrl,
    method: 'POST',
    body: JSON.stringify(payload)
  }, function (error, response, body) {
    if (error) {
      return callback(error);
    }
    callback(null, response.statusCode, body);
  });
}
