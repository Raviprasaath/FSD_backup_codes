const express = require('express');
const router = express.Router();

const { getUserDetail, addingUserDetail } = require('../controllers/authenticationController');

router.get('/', getUserDetail);
router.post('/', addingUserDetail);

module.exports = router;