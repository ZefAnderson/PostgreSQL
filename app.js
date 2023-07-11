const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const db = require('./queries');
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/actors', db.getActors);
app.get('/rentals', db.getRental);

app.get('/', (req, res) => {
    res.send('Hello There');
})