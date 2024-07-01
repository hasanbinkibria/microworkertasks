const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let users = [];

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.status(200).send('Success');
    } else {
        res.status(400).send('Bad Request');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
