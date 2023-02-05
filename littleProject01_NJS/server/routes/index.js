const { json } = require('express')
const express = require('express')
const router = express.Router()
const handleSaveUserInfoObject = require('../controller/User/handleSaveUserInfo')
const handleGetUserInfoObject = require('../controller/User/handleGetUserInfo')

module.exports.saveUserInfo = router.post('/saveUserInfo',handleSaveUserInfoObject.handleSaveUserInfo)
module.exports.getUserInfo = router.get('/getUserInfo',handleGetUserInfoObject.handleGetUserInfo)