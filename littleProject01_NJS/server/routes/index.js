const { json } = require('express')
const express = require('express')
const router = express.Router()
const handleSaveUserInfoObject = require('../controller/User')

module.exports.saveUserInfo = router.post('/saveUserInfo',handleSaveUserInfoObject.handleSaveUserInfo)