const router = require('express').Router();

// Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//Auth Logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('Logging out');
});

// Auth Google
router.get('/google', (req, res) => {
    // handle with passport
    res.send('logging in with google');
});

module.exports = router;