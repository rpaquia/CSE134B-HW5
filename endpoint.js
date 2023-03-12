const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this was the part I needed to add because CORS but see how permissive the sample code is!

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Sent-By');
    next();
});




app.post('/echo', (req, res) => {
    const { body, headers } = req;

    // Express will normalize the headers into lower case!

    if (headers['x-sent-by']) {
        res.setHeader('Content-Type', 'application/json');
        res.json(body);
    } else {
        res.setHeader('Content-Type', 'text/html');
        let html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Form Echo</title></head><body><h1>Form Data</h1><ul>`;
        for (let key in body) {
            html += `<li>${key}: ${body[key]}</li>`;
        }
        html += '</ul></body></html>';
        res.send(html);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000'));