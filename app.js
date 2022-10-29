const express = require("express");
const app = express();
const port = 3000;
const fs = require("node:fs");
const whatsapp_url_generator = require("./whatsapp_url_generator");

// render html
const render_html = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

// serve static file
app.use(express.static("public"));
app.use("/public", express.static("public"));

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// display ui
app.get("/", (req, res) => {
  render_html("./public/index.html", res);
});

// api handler
app.post("/api/", (req, res, next) => {
  res.send(whatsapp_url_generator.generate(req.body.phone, req.body.words));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
