const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
 // Express to run server and routes
const express = require('express');
const cors = require('cors');
// Start up an instance of app
const app = express();

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 8081;
const server = app.listen(port, listening);

function listening() {
    console.log(`im listening the port: ${port}`)
}

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

app.post('/api', async function (req, res){
    const text = req.body.text;
    const response = await fetch (baseUrl+apiKey+'&of=json&txt='+text+'.&lang=en')
    try {
        const data = await response.json();
        console.log(data)
        res.send(data);
    }catch(error){
        console.log('error', error)
    }
});
