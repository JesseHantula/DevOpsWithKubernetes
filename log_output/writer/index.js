const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const randomString = uuidv4();
const filePath = path.join("/usr/src/app/files", "log.txt");

function appendLog() {
  const timestamp = new Date().toISOString();
  const line = `${timestamp}: ${randomString}\n`;
  fs.appendFile(filePath, line, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
}

appendLog();

setInterval(appendLog, 5000);
