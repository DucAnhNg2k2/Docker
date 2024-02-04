const express = require("express");
const app = express();
const Redis = require("ioredis");

const redis = new Redis({
  host: "",
  port: 6480,
  password: "ducanh230502",
});

app.get("/", async (req, res) => {
  let val = await redis.get("key");
  if (val == null) {
    val = "Ducanh230502";
    await redis.set("key", "Ducanh230502");
  }
  res.send(val);
});

app.listen(4000);
