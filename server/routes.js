const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('rep!'));
router.get('/health', (req, res) => res.send('healthy!'));

module.exports = router;