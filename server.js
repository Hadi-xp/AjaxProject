// this is a server with my github link that resonse a 500 status code to the client using express.

const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.status(500).send('This is a Server Error');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


