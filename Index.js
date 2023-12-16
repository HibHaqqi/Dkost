const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const router = require("./routers/router");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended :false
}));
app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Hello World!"));
app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));