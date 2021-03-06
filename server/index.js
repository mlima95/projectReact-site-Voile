let express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.port || 3000;
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://admin:admin@clustervoile-98qyi.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},() =>{
    console.log("Connected to db!");
    http.listen(port, () => console.log("Server Up and running on port "+port));
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

let user_routes = require('./api/routes/UsersRoutes');
user_routes(app);

let request_routes = require('./api/routes/RequestRoutes');
request_routes(app);



