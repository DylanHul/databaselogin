const express = require('express');
const router = express.Router();

const {findUserByName, getUser}  = require('../database/db');
