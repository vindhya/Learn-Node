const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log('hey!!!');
  const me = { name: 'Vindhya', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(me);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Vindhya',
    dog: req.query.dog,
    title: 'Yummyyy'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
