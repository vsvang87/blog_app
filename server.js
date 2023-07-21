const express = require("express");
//init app and middleware
const app = express();
// serve HTML files
const path = require("path");
// saving posts to the database
const BlogPost = require("./models/BlogPost.js");

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
app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/create", (req, res) => {
  res.render("create");
});

// handle post request from form
app.post("/post/store", async (req, res) => {
  console.log(req.body);
  await BlogPost.create(req.body);
  res.redirect("/");
});
