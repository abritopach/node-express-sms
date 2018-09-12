var express = require('express');
var router = express.Router();

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'API_KEY',
  apiSecret: 'API_SECRET',
}, {debug: true});

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
});

module.exports = router;
