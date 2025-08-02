const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();
const filePath = path.join("/usr/src/app/files", "log.txt");

app.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading log file");
    }
    res.type("text/plain").send(data);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
