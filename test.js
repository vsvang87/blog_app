const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost.js");

mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

BlogPost.create(
  {
    title: "The mythbuster's guide to saving money on every bills",
    body: "If you have been here a long time, you might remember when I went on ITV tonight to dispense a masterclass in saving money on energy bills.",
  }
    .then((result) => {
      console.log("successful");
    })
    .catch((error) => {
      console.log(error);
    })
);
//find id
BlogPost.findById(id, (error, blogspot) => {
  console.log(error, blogspot);
});
//update records
BlogPost.findByIdAndUpdate(
  id,
  {
    title: "Updated title",
  },
  (error, blogspot)
);

//delete records
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
