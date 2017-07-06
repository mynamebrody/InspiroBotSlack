var request = require('request');

module.exports = function (req, res, next) {
  var errimage = 'http://inspirobot.me/website/images/inspirobot-dark-green.png';
  request('http://inspirobot.me/api?generate=true', function (error, response, body) {
    var botPayload = {};
    if (!error && response.statusCode == 200) {
      botPayload.text = body;
      botPayload.response_type = "in_channel";
      return res.status(200).json(botPayload);
    }
    else {
      botPayload.text = errimage;
      botPayload.response_type = "ephemeral";
      return res.status(200).json(botPayload);
    }
  });
}