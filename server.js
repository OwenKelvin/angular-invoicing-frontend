//Install express server
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

// intercept file api requests TODO remove in production if backend is implemented
/***************************************/

var bodyParser = require( 'body-parser' );

// configure the app to use bodyParser()
app.use( bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get( "/api/phones/allowed-countries", ( req, res ) => {
  res.send([
    
  ]);
});
app.post( "/api/oauth/token", ( req, res ) => {
  if ( req.body.username === 'admin@admin.com' && req.body.password === 'password') {
    res.send({token: 'bjdsbgjw.rg tj,wrtnwltrnewrewth'});
  } else {
    const message = 'Invalid Credentials';
    return res.status(401).send( { data: { message } } );
  }
});

/***************************************/

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist"));

app.get("/*", (req, res) => {
  res.sendFile( path.join( __dirname + "/dist/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen( port );
console.log(`App is running on port ${port}`)
