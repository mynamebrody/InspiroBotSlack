module.exports = function (req, res, next) {
  var request = require('request');
  var image = 'http://inspirobot.me/website/images/inspirobot-dark-green.png';
  request('http://inspirobot.me/api?generate=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      image = body
    }
    else {
      return res.status(200).end();
    }
  })
  var botPayload = {
    text : image
  };
  return res.status(200).json(botPayload);
}