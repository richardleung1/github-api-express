const express = require('express');
const axios = require('axios');

const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Github API Express Page');
    axios.get('https://api.github.com/users/richardleung1')
        .then(function (response) {
            console.log(response.data);
        })
});

app.listen(PORT, () => {
    console.log(`PORT ${PORT}`)
})