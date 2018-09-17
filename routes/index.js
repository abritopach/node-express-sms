var express = require('express');
var router = express.Router();

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
}, {debug: true});

const twilio = require('twilio') (
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', (req, res) => {
  // res.send(req.body);
  console.log(req.body);
  let number = req.body.number;
  let text = req.body.text;
  let platform = req.body.platform;

  if (platform === 'nexmo') {
     // Sending SMS via Nexmo.
    nexmo.message.sendSms(
      "NEXMO", number, text, {type: 'unicode'},
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
          res.send(responseData);
          // Optional: add socket.io -- will explain later
        }
      }
    );
  }
  else {
      twilio.messages.create({
    from: number,
    to: number,
    body: text
  }).then((messsage) => console.log(message.sid));
  } 

});

module.exports = router;
