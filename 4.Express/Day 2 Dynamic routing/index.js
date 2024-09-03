const express = require("express");
const app = express();
const path = require("path");
let filepath = path.join(__dirname, "public");

app.use(express.static(filepath));

app.get("/", (req, res) => {
  res.sendFile(path.join(filepath, "homepage.html"));
});

app.get("/:id", (req, res) => {

let filename=path.extname(req.params.id) !== ""?req.params.id: req.params.id + ".html"
  res.sendFile(path.join(filepath, filename), (err) => {
    if (err) {
      res.status(404).sendFile(path.join(filepath, "error.html"));
    }
  });
});

app.listen(4000, (err) => {
  if (err) console.log(err);
  else console.log("server is live at port 4000");
});
