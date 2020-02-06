const express = require("express");
const app = express();
const port = 3000;

const loggingMiddleware = (req, res, next) => {
  const time = new Date();
  console.log("request received at " + time);
  res.setHeader("X-Codaisseur-Time", time);
  next();
};

const failRandomlyMiddleware = (req, res, next) => {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    next();
  } else {
    res.status(500).end();
  }
};

app.use(loggingMiddleware);
app.get("/", failRandomlyMiddleware, (req, res) => {
  res.send("50% of the time, it works!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.get("/", (req, res) => res.send("Hello"))

app.use(loggingMiddleware);
app.get("/foo", (req, res) => {
  res.send("Foo");
});
