const express = require("express");
const mongoose = require("mongoose");
const app = express();
const password = encodeURIComponent("Sanabil@786");
console.log(password);


app.get("/", (req, res) => {
  res.send("Hello");
});
mongoose
  .connect(`mongodb+srv://malkaanjum1999:${password}@shehyaz.aoffx.mongodb.net/?retryWrites=true&w=majority&appName=Shehyaz`)
  .then(() => {
    console.log("Connected to Database!!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(5000, () => console.log("Backend is running"));
