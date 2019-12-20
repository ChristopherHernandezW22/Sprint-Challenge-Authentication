const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./model');
const restricted = require('./authenticate-middleware');

router.post('/register', (req, res) => {
  // implement registration
  let {username, password} = req.body;
  const hash = bcrypt.hashSync(password, 8)

  URLSearchParams.add({username, password: hash})
    .then(saved => {
      res.status(201).json(saved);
    });
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;
  
  Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = signToken(user);

            res.status(200).json({
                token,
                message: `Welcome ${user}!`,
            });
        } else {
              res.status(401).json({ message: 'Invalid credentials' });
        }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
