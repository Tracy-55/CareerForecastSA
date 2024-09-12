const express = require('express');
const router = express.Router();

// Sample route for user profiles
router.get('/', (req, res) => {
    res.json({ message: 'User profiles will be here' });
});

module.exports = router;
cd