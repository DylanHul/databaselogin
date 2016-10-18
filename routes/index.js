const express = require('express');
const router = express.Router();

const {findUserByName, getUser}  = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users/sign-in')
});

router.get('/api/v1/users/*', (req, res, next) => {

  if (req.session.usersData) {
    next()
  } else {
    res.redirect('/')
  }
})

router.get('/api/v1/users/:id', (req, res) => {
  let id = req.params.id
  getUser(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})

module.exports = router;
