const express = require("express");
const app = express();
const PORT = 3123;

app.get("/", (req, res) => {
  res.send("Hello from your Docker container! hehe");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});