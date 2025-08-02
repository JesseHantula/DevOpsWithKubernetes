const { v4: uuidv4 } = require("uuid");

const randomString = uuidv4();

setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}, 5000);

app.get("/status", (req, res) => {
  const timestamp = new Date().toISOString();
  res.json({
    timestamp,
    randomString,
  });
});
