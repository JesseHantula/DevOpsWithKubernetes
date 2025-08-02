const { v4: uuidv4 } = require("uuid");

const randomString = uuidv4();

const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}, 5000);

app.get("/", (req, res) => {
  const timestamp = new Date().toISOString();
  res.json({
    timestamp,
    randomString,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
