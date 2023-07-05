const express = require("express");
const app = new express();
// serve HTML files
const path = require("path");
// setting templates
const ejs = require("ejs");
app.set("view engine", "ejs");

//serve static files
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("App listening on port 3000");
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
