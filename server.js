const express = require('express');
require('dotenv').config()

const app = express();

console.log(process.env.API_KEY);

app.get('/', (req, res) => {
    res.send("server running")
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
});
