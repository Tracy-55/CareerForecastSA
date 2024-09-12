const express = require('express');
const router = express.Router();

// Sample route for job recommendations
router.get('/', (req, res) => {
    res.json({ message: 'Job recommendations will be here' });
});

module.exports = router;
