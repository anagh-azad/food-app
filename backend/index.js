import "dotenv/config";
import express from "express";
import dbConnect from "./db.js";
import router from "./routes/createUser.js";
import displayDataRouter from "./routes/displayData.js";
import orderDataRouter from "./routes/orderData.js";

dbConnect();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/api", router);
app.use("/api", displayDataRouter);
app.use("/api", orderDataRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
