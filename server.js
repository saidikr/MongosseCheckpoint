const express = require("express");
require("dotenv").config();
require("./config/db").connect();
const apiRoutes = require("./routes/route");
const app = express();
const PORT = process.env.PORT;


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.use("/api", apiRoutes());


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
