const express = require("express");
const morgan = require("morgan");
const db = require("../database/Connection");
const app = express();
const tweets = db.get("Tweets");
const cors = require("cors");

app.use(morgan("common"));
app.use(cors());
app.use(express.json());
// get http request --- gets all the messages or tweets
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "hello this is express!!",
  });
});

//get the messages
app.get("/tweets", (req, res) => {
  tweets
    .find()
    .then((messages) => {
      res.json(messages);
    })
    .catch((e) => {
      console.log(e);
    });
});
function isValid(tweet) {
  return tweet.name && tweet.message.toString().trim() !== "";
}
app.post("/api/post", (req, res) => {
  if (isValid(req.body)) {
    const tweet = {
      name: req.body.name.toString(),
      message: req.body.message.toString(),
    };
    // insert into db
    tweets
      .insert(tweet)
      .then((createdTweet) => {
        res.json(createdTweet);
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    res.status(422);
    res.json({
      message: "pls enter the name and message",
    });
  }
  res.send("This is a post request!");
});

app.use((req, res, next) => {
  const error = new Error(`---NOT FOUND---${req.originalUrl}`);
  res.status(404);
  next(error);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listeninig at http://localhost:${port}`);
});
