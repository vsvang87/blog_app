const express = require("express");
const app = new express();
// serve HTML files
const path = require("path");

// connect mongodb with nodejs
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// setting templates
const ejs = require("ejs");
app.set("view engine", "ejs");
// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//serve static files
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/notfound.html"));
  res.render("post");
});
app.get("/create", (req, res) => {
  res.render("create");
});

// handle post request
app.post("/posts/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
