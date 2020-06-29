//Install express server
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist"));

app.get("/*", (req, res) => {
  res.sendFile( path.join( __dirname + "/dist/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen( port );
console.log(`App is running on port ${port}`)
