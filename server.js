import e from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/mongoDb.js";
import { clerkWebhooks } from "./contollers/webhooks.js";

// initialize express
const app = e();

// connect to database
await connectDb();

// middleware
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("API Working");
});
app.post('/clerk', e.json(), clerkWebhooks)

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
