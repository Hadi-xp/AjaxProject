// this is a server with my github link that resonse a 500 status code to the client using express and im going to send request to this server with XMLhttpRequest.

const express = require('express');
const config = require('config');
const app = express();

app.get('/serverError',(req,res)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET',config.get('server.host'));
    xhr.send();
    res.status(500).send('server error');
});

app.listen(3000);


