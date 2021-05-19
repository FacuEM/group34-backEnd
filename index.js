const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 8080;
const db = require("./api/db");
const http = require("http");
const API = require("./api/routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/api", API);

db.sync({ force: false }).then(() => {
  http.createServer(app).listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
});
