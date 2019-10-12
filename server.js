const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    msg: "Welcome to the api"
  });
});

app.post("/api/post", (req, res) => {
  res.json({
    msg: "Post created"
  });
});

app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "Anwesh",
    email: "anwesh@gmail.com"
  };
  jwt.sign({ user }, "secretkey", (err, token) => [
    res.json({
      token
    })
  ]);
});

app.listen(2345, () => console.log("server is running on port 2345"));
