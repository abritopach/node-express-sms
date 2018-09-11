var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', (req, res) => {
  res.send(req.body);
  console.log(req.body);
  let number = req.body.number;
  let text = req.body.text;

  // Sending SMS via Nexmo.
});

module.exports = router;
