const express = require('express');
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');
const router = express.Router();

router.post('/feedback', submitFeedback);
router.get('/feedback', getFeedback);

module.exports = router;
