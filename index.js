const express = require('express');
const axios = require('axios');

const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    axios.get('https://api.github.com/users/richardleung1')
        .then(function (response) {
            console.log(response.data);
            const richardObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            console.log(richardObject);
            res.send(richardObject);
        })
});

app.get('/rome', (req, res) => {
    axios.get('https://api.github.com/users/romebell')
        .then(function (response) {
            console.log(response.data);
            const romeObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            console.log(romeObject);
            res.send(romeObject);
        })
});

app.get('/jaxon', (req, res) => {
    axios.get('https://api.github.com/users/JaxonNarramore')
        .then(function (response) {
            console.log(response.data);
            const jaxonObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            console.log(jaxonObject);
            res.send(jaxonObject);
        })
});

app.get('/thomas', (req, res) => {
    axios.get('https://api.github.com/users/tcgilbert')
        .then(function (response) {
            console.log(response.data);
            const thomasObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            console.log(thomasObject);
            res.send(thomasObject);
        })
});

app.get('/alex', (req, res) => {
    axios.get('https://api.github.com/users/AlexJBustillos')
        .then(function (response) {
            console.log(response.data);
            const alexObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            console.log(alexObject);
            res.send(alexObject);
        })
});

app.listen(PORT, () => {
    console.log(`PORT ${PORT}`)
})