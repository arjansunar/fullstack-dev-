const monk = require("monk");

// Connection URL
const url = "<mongo URI>";
const db = monk(url);

db.then(() => {
  console.log("Connected correctly to server");
}).catch((e) => {
  console.log(e);
});

module.exports = db;
