const express = require('express');

const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app started on port 3000');
});