const express = require('express');
const router = express.Router();

const {findUserByName, getUser}  = require('../database/db');

router.get('/', (req, res) => {
  res.send('Hello and Welcome')
})

module.exports = router;
