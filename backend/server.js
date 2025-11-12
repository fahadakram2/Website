import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// simple route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
