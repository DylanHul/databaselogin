const express = require('express');
const router = express.Router();
const {findUserByName, getUser}  = require('../database/db');
const { hashPass, compareHash } = require('../bcrypt.js')

/* GET users listing. */
router.get('/sign-in', (req, res) => {
  res.render('index')
})
router.get('/', (req, res) => {
  res.redirect('/users/sign-in')
})

router.post('/sign-in', (req, res) => {
  let {user_name, user_password} = req.body
  findUserByName(user_name)
    .then((logInData) => {
      const hash = logInData[0].user_password
      const myPassword = req.body.password

      if (compareHash(myPassword, hash)) {
        req.session.accountData = { id: logInData[0].id, userName: logInData[0].user_name }
        let id = req.session.accountData.id
        res.redirect(`/users/${id}`)
      } else {
        res.redirect('/users/sign-in')
      }
    })
})


// router.get('/sign-out', (req, res) => {
//   req.session.destroy()
//   res.redirect('/users/sign-in')
// })

router.get('/:id', (req, res) => res.render('app'))

module.exports = router;
