const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../assets/views/homepage.ejs')
});

module.exports = router;