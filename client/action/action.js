import React from 'react'

//account meaning the users (user account)

function getAccountById (id) {
 return (dispatch) => {
   request
   .get(`/api/v1/users/${id}`)
   .end((err, res) => {
       if (err) {
         console.error(err.message)
         return
       }
       dispatch(receiveAccountId(JSON.parse(res.text)))
     })
 }
}

const receiveAccountId = (payload) => {
  return {
    type: 'RECEIVE_ACCOUNT_ID',
    payload: payload
  }
}
