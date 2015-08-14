module.exports = function (req, res, next) {
  var request = require('request');
  var errimage = 'http://inspirobot.me/website/images/inspirobot-dark-green.png';
  request('http://inspirobot.me/api?generate=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var botPayload = {
        text : body
      };
      return res.status(200).json(botPayload);
    }
    else {
      var botPayload = {
        text : errimage
      };
      return res.status(200).json(botPayload);
    }
  });
}