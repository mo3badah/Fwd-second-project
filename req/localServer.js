// Express to run server and routers
const express = require('express');

// start up an instance of the app
const app = express();

// Middleware
// use express and body parser as middleware
//app.use(bodyParser.urlencoded((extended:false)));
/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// initialize the main project folder
app.use(express.static('demo'));

const port = 8000;
// spin up the server
const server = app.listen(port,listening);
function listening(){
    console.log(`server is running`);
    console.log(`Running in local host : ${port}`);

}
