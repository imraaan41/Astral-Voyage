const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend läuft");
});

app.get("/api/rooms", (req, res) => {
  res.json([
    { id: 1, name: "Wohnzimmer" },
    { id: 2, name: "Schlafzimmer" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
