import express from "express";
import cors from "cors";

const app = express();

// ✅ Use the port Elastic Beanstalk provides, fallback to 5000 for local dev
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all origins (not recommended for production)
  })
);

// simple health route for EB to test
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Elastic Beanstalk!");
});

// example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
