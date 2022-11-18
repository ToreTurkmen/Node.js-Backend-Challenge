const express = require("express");
const app = express();
const router = require("./config/router");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//require mongoose
require("./config/mongoose");

//require router
app.use(router);



let port = 8002;
app.listen(port, () => console.log(`server on run ${port}`));