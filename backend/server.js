import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ✅ Configure CORS once, allow all origins for testing
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// handle preflight requests explicitly (sometimes needed)
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("✅ Backend is running on Elastic Beanstalk!");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
