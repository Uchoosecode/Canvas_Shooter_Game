// brings in the express dependency into our file
const express = require("express");

// gives us the app controller that we can use within our project
const app = express();

// tells us what directory the controller reads from
app.use(express.static(__dirname + "/public/"));

// sets up the root route
app.get('/', (req, resp) => resp.sendFile("index.html"));

// runs app on indicated port
app.listen(3000, () => console.log("listening on port 3000"));