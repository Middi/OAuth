const router = require('express').Router();
const passport = require('passport');

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
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// redirect route for google
router.get('/google/redirect', (req, res) => {
    res.send('you have reached googles callback URI');
})

module.exports = router;