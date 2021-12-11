const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.listen(4003, () => {
  console.log("started at 4003/ MODERATION");
});
