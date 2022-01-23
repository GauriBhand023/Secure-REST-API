
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({ limit: "100mb" }));

const authRouter = require("./routes/auth");
const messagesRouter = require("./routes/messages");

app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});